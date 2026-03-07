# WAND Algorithm Execution Visualizer

An interactive visualization tool for the WAND (Weak AND) algorithm, which efficiently retrieves top-k documents from an inverted index in information retrieval systems.

## Overview

This project provides a step-by-step visualization of the WAND algorithm execution, helping users understand how the algorithm processes queries and identifies the most relevant documents without fully evaluating all candidates.

The WAND algorithm is a document-at-a-time (DAAT) query processing strategy that uses upper bounds and a threshold to skip unnecessary score computations, making it much faster than exhaustive scoring.

## Features

- **Interactive Visualization**: Step through each algorithm iteration with forward/backward navigation
- **Real-time State Display**: View current threshold, pivot document, and top-k results
- **Animated Inverted Index**: Watch pointers move and terms reorder as the algorithm executes
- **Keyboard Navigation**: Use arrow keys (←/→) for quick step navigation
- **Algorithm States**: See actions like SORT, COMPUTE DOC, PIVOT CONSIDERED, and NOT ENOUGH PIVOT MASS

## Files

- **`index.html`**: Interactive web-based visualizer with animated inverted index display
- **`manual.py`**: Python implementation that executes the WAND algorithm and generates step history
- **`steps_history.js`**: JavaScript data file containing the execution trace for visualization

## How to Use

1. **Run `manual.py`** to generate the execution trace:
   ```bash
   python manual.py
   ```
   This creates `steps_history.js` containing the `stepsHistory` variable with all algorithm execution steps.

2. **Open `index.html`** in a web browser to visualize the execution

3. Use the navigation buttons or arrow keys (←/→) to step through the algorithm execution

### Configuration

Edit `manual.py` to customize the algorithm execution:

- **Inverted Index**: Modify the `inverted_index` list to test different term postings:
  ```python
  inverted_index = [
      {
          "term": "term_name",
          "doc_freq": 6,
          "upper_bound": 1.6,
          "postings": [(doc_id, score), ...],
          "pointer": 0
      },
      # Add more terms...
  ]
  ```

- **K Value**: Set the number of top documents to retrieve:
  ```python
  k = 2  # Change this to your desired top-k value
  ```

After changing configuration, run `python manual.py` again to regenerate `steps_history.js`, then refresh `index.html` to see the updated visualization.

## Algorithm Explanation

The WAND algorithm processes queries as follows:

1. **SORT**: Terms are sorted by the document ID at their current pointer position
2. **Find Pivot**: Accumulate upper bounds until they exceed the threshold (θ)
3. **Evaluate Pivot**:
   - If pivot ≤ current doc: Already considered, advance the first term
   - If all terms point to pivot: **COMPUTE DOC** - Calculate exact score and update top-k
   - Otherwise: **NOT ENOUGH PIVOT MASS** - Advance the first term to the pivot position
4. **Update Threshold**: When top-k is full, threshold becomes the k-th highest score
5. **Repeat**: Continue until pivot reaches the end marker

## Example Query

The default example demonstrates a query with three terms: `"hujan turun deras"` (Indonesian for "heavy rain falls")

- **k = 2**: Find the top 2 most relevant documents
- **Terms**: hujan, turun, deras
- **Inverted Index**: Each term has document IDs with TF-IDF scores
- **Result**: Algorithm efficiently identifies documents 6 and 11 as most relevant

## Key Concepts

- **Upper Bound**: Maximum possible score contribution from a term
- **Threshold (θ)**: Minimum score needed to enter top-k (k-th highest score)
- **Pivot**: The document ID where accumulated upper bounds first exceed threshold
- **Pointer**: Current position in each term's posting list

## Requirements

- **Visualizer**: Modern web browser with JavaScript enabled
- **Generator**: Python 3.x

## Customization

You can customize the visualization by editing `index.html`:

- **Colors**: Modify CSS variables in `:root`
- **Timing**: Adjust transition durations in CSS
- **Layout**: Change panel sizes and dashboard layout


## References

- Broder, A. Z., Carmel, D., Herscovici, M., Soffer, A., & Zien, J. (2003). "Efficient query evaluation using a two-level retrieval process." *CIKM 2003*