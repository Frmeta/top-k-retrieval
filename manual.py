import json




# Inverted Index Setup
inverted_index = [
    {
        "term": "hujan",
        "doc_freq": 6,
        "upper_bound": 1.6,
        "postings": [(1, 1.5), (2, 0.4), (3, 0.6), (6, 1.0), (8, 1.5), (11, 1.6), ("last", 0)],
        "pointer": 0
    },
    {
        "term": "turun",
        "doc_freq": 6,
        "upper_bound": 1.5,
        "postings": [(1, 0.7), (3, 1.0), (6, 1.5), (8, 1.5), (10, 0.3), (12, 1.1), ("last", 0)],
        "pointer": 0
    },
    {
        "term": "deras",
        "doc_freq": 5,
        "upper_bound": 1.8,
        "postings": [(1, 1.2), (6, 1.0), (7, 0.5), (10, 0.6), (11, 1.8), ("last", 0)],
        "pointer": 0
    }
]
last_id = "last"


k = 2
top_k = []
threshold = 0
pivot = 0
cur_doc = 0
step = ""
step_history = []

def record_step():
    snapshot = {
        "step": step,
        "top_k": [list(item) for item in top_k],
        "threshold": threshold,
        "pivot": pivot,
        "cur_doc": cur_doc,
        "inverted_index": []
    }

    for term in inverted_index:
        term_snapshot = {
            "term": term["term"],
            "doc_freq": term["doc_freq"],
            "upper_bound": term["upper_bound"],
            "pointer": term["pointer"],
            "postings": [list(posting) for posting in term["postings"]]
        }
        snapshot["inverted_index"].append(term_snapshot)

    step_history.append(snapshot)


def save_history(file_path="steps_history.js"):
    with open(file_path, "w", encoding="utf-8") as f:
        # Save as JavaScript variable instead of JSON
        f.write("const stepsHistory = ")
        json.dump(step_history, f, indent=2)
        f.write(";\n")

record_step()

end = False
for i in range(20):
    # sort the terms in non decreasing order of DID
    inverted_index = sorted(inverted_index, key=lambda x: x['postings'][x['pointer']][0])
    step = "SORT"
    record_step()
    
    # find pivot term, the first one with accumulated UB >= theta
    sum = 0
    for idx, term in enumerate(inverted_index):
        sum += term["upper_bound"]
        if sum >= threshold:
            p_term = term
    
    if p_term == None:
        step = "END"
        record_step()
        break

    pivot = p_term["postings"][p_term["pointer"]][0]
    if pivot == last_id:
        step = "END"
        record_step()
        break

    if pivot <= cur_doc:
        # pivot has already been considered, advance one of the preceding terms
        step = "PIVOT CONSIDERED, ADVANCE"
        inverted_index[0]["pointer"] += 1
    
    elif pivot == inverted_index[0]["postings"][inverted_index[0]["pointer"]][0]:
        step = f"COMPUTE DOC {pivot}"
        # success
        cur_doc = pivot

        # compute score
        score = 0
        for term in inverted_index:
            score += term["postings"][term["pointer"]][1]
        
        if score >= threshold:
            top_k.append(term["postings"][term["pointer"]])
            
            top_k = sorted(top_k, key= lambda x: x[1], reverse=True)
            if len(top_k) > k:
                top_k.pop()
            threshold = top_k[-1][1]
    
    else:
        step = "NOT ENOUGH PIVOT MASS, ADVANCE"
        # not enough mass yet on pivot, advance one of the preceding terms
        for j in range(inverted_index[0]["pointer"]+1, len(inverted_index[0]["postings"])):
            if inverted_index[0]["postings"][j][0] == last_id:
                inverted_index[0]["pointer"] = j
                end = True
                break
            if inverted_index[0]["postings"][j][0] >= pivot:
                inverted_index[0]["pointer"] = j
                break
        inverted_index[0]["pointer"] = j
    
    record_step()
    if end:
        step = "END"
        record_step()
        break

save_history()
    
