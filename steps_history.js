const stepsHistory = [
  {
    "step": "",
    "top_k": [],
    "threshold": 0,
    "pivot": 0,
    "cur_doc": 0,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 0,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [],
    "threshold": 0,
    "pivot": 0,
    "cur_doc": 0,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 0,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "COMPUTE DOC 4",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 0,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 0,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 0,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 1,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        4,
        0.5
      ]
    ],
    "threshold": 0,
    "pivot": 4,
    "cur_doc": 4,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 1,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "COMPUTE DOC 5",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 1,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 1,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 1,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 2,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 0,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 2,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 2,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 5,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 2,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "NOT ENOUGH PIVOT MASS, ADVANCE",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 9,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 3,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        5,
        0.9
      ],
      [
        4,
        0.5
      ]
    ],
    "threshold": 0.5,
    "pivot": 9,
    "cur_doc": 5,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 3,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "COMPUTE DOC 9",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 9,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 3,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 9,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 3,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "PIVOT CONSIDERED, ADVANCE",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 9,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 4,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 9,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 1,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 4,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "NOT ENOUGH PIVOT MASS, ADVANCE",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 10,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 2,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 4,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "SORT",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": 10,
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 2,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 4,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  },
  {
    "step": "END",
    "top_k": [
      [
        9,
        1.1
      ],
      [
        5,
        0.9
      ]
    ],
    "threshold": 0.9,
    "pivot": "last",
    "cur_doc": 9,
    "inverted_index": [
      {
        "term": "manusia",
        "doc_freq": 3,
        "upper_bound": 0.5,
        "pointer": 2,
        "postings": [
          [
            4,
            0.1
          ],
          [
            5,
            0.5
          ],
          [
            10,
            0.1
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "buatan",
        "doc_freq": 2,
        "upper_bound": 0.8,
        "pointer": 2,
        "postings": [
          [
            5,
            0.1
          ],
          [
            9,
            0.8
          ],
          [
            "last",
            0
          ]
        ]
      },
      {
        "term": "cerdas",
        "doc_freq": 4,
        "upper_bound": 0.4,
        "pointer": 4,
        "postings": [
          [
            4,
            0.4
          ],
          [
            5,
            0.3
          ],
          [
            8,
            0.2
          ],
          [
            9,
            0.3
          ],
          [
            "last",
            0
          ]
        ]
      }
    ]
  }
];
