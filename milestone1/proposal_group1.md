 # Teamwork Propsal (COLX 523 Group 1)

| Team member | Student number  |
| :--: | :--: |
| Mohammad Ahsan Ghani | 82873100 |
|   Jeremy Yang    |  57353781   |
|  Oksana Necio    |  75493593  |
|   Ruoyao Yin   | 59004859  |

## Source of data:

We chose to use data from [Stack Overflow](https://stackoverflow.com/questions/tagged/python?tab=votes&page=%7B%7D&pagesize=15).

## Description of the text data:

We will be dealing with question-answering data in English. It is expected that the authors of those text would have some domain knowledge with respect to the topic. These answer documents shouldn’t be long. The length of a typical answer would be a couple of short paragraphs of several sentences.

## Text filter:

Within our crawling code, we will extract only the question and answer text according to the answer text tags in the xml data. The code blocks in the answer can also be filtered out by the code text tags in the xml file.

## Corpus structure:

In terms of corpus structure, we would have a drop-down bar for available keywords to choose from and this first filters from all the answer data available. Then for each answer we would display both the answering text and the annotated feature (which would be the perceived helpfulness and quality of the answer). In terms of metadata, we would store how active the user who provided the answer is, and how many comments / up(down)votes each answer has.

## Data Annotation:

We will be annotating the perceived quality and relatedness to the question of each answering text.

## Data storage format:

For our data, we propose a JSON format as below:
```
[{
    question: [
        '\n',
        '<p> ... </p>',
        ...
    ],  
    answer: [
        '\n',
        '<p> ... </p>',
        ...
    ]
},
...]
```

And for the meta data, it would be stored in a JSON format as below:
```
[{
    'tags': ['a', 'b', 'c', ...],
    'owner': {
        'reputation': ...,
        'user_id': ...,
        'accept_rate': ...,
        ...
        },
    'view_count': ...,
    'last_activity_date': ...,
    'title': '...',
    ...
}, 
...]
```

## Potential use of the corpus:

Our corpus is helpful to answer 'scientific hypothesis' like "Are users with higher interaction better with giving concise and good answers?" In addition, this corpus can also help developers determine things like the kinds of issues that are being understood and explained the poorest..