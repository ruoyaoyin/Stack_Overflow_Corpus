# Corpus Explanation 

Our corpus comes from StackOverflow posts with the 'python' tag: https://stackoverflow.com/questions/tagged/python

Our collected corpus can be found in a few different files, all of which are in the *scraper* folder. <br>

The corpus was collected in several different runs. We integrated cloud computing to leverage various IP addresses with a one second sleep between pings and iterated over batch sizes of 200 questions to prevent our virtual machines from getting blacklisted by the hosts servers. 

Each run is in it's own folder: <br>
run1: https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/tree/master/milestone2/scraper/run1 <br>
run2: https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/tree/master/milestone2/scraper/run2 <br>
run3: https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/tree/master/milestone2/scraper/run3 <br>

In each run there are several files. The links below lead to *run1* but each run has the same files. <br>
We have our question answer pairs in both a *json* file and a *csv* file: <br>
    https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone2/scraper/run1/qa_pairs.json <br>
and <br>
    https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone2/scraper/run1/qa_pairs.csv

We have also stored just the questions in a *txt* file: <br>
   https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone2/scraper/run1/questions.txt <br>
and just the answers in a *csv* file: <br>
   https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone2/scraper/run1/answers.csv

All of our runs were aggregated into one *xlsx* file: <br>
    https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone2/scraper/qa_pairs_aggregate.xlsx

We are using 958 question-answer pairs. Most questions have multiple answers but we decided to only take 2 answers for each question. This leads to a total of 481 questions and 958 answers.

The total amount of words in our corpus is 34860 and the total amount of word types is 3832.

One problem with the corpus is that we are not taking the code from the code blocks. This can lead to questions and answers such as: <br>
  `'It's pretty simple really:'` <br>
This answer is followed by a code block that we do not have, making it hard to annotate.
