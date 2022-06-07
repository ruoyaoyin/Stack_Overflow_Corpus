# Interannotator agreement study

We chose to use several interannotator agreement measures. We decided to calculate average, S (Simplest Assumption), Scott's Pi, and Cohen's Kappa. 
We decided to leave out Krippendorf's Alpha because it does not make sense to have a distance function for our 'Classification' annotation. 
Our classes are not evenly distributed. For example, questions related to python libraries come up far more often than questions about scope, and intermediate level questions come up more than expert level questions.
We thought that Scott's Pi would be a good choice for this reason. 
However, we also wanted to compare it to other scores.

Our scores for each of the measures are:

```

Average Annotator Agreement
Classification:  0.58
Difficulty:  0.73
Directness:  0.92
Average:  0.74

The Simplest Assumption
Classification:  0.56
Difficulty:  0.66
Directness:  0.87
Average:  0.7

Scott's Pi
Classification:  0.54
Difficulty:  0.45
Directness:  0.02
Average:  0.34

Cohen's Kappa
Classification:  0.54
Difficulty:  0.45
Directness:  0.02
Average:  0.34

```

We believe our annotation is reliable since we came up with specific categories to label our data as a group and annotated it ourselves. 
Our Difficulty and Directness scores are good. Our Directness scores are expecially good in Scott's Pi and Cohen's Kappa, where lower scores are better. However, our Classification scores are lower than expected. 
This is likely because a question can fall into multiple categories and we limited ourselves to only labeling each question-answer pair with one category. 
For example, a question may be related to python libraries but also be about machine learning. If we were to label each post with multiple labels, this might improve our score.
Another reason for our low scores might be our experience and consistency biases. We discuss this more within [annotation_options](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/Annotation_Options.md).

The code used to calculate our interannotator agreement measures can be found in [agreement.ipynb](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/agreement.ipynb)

