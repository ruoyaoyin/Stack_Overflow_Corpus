# Annotation Options

| Team member | Student number  |
| :--: | :--: |
| Mohammad Ahsan Ghani | 82873100 |
|   Jeremy Yang    |  57353781   |
|  Oksana Necio    |  75493593  |
|   Ruoyao Yin   | 59004859  |

## Annotation Quality
* Due to the sensitive nature of our particular forum platform, we were very keen on selecting a filter which is relatively familiar across our group members.
* Python seems to be a concrete option due to the significant use during and prior to the Masters of Data Science in Computational Linguistics program.
* We further took steps to eliminate question / answers pairs where relatively little to no information was captured regarding the problem statement without implementing code blocks.
* We selected 3 annotations in terms of text classification, post complexity and whether or not the answer directly addressed the question or added on to a previous question or referenced another resource respectively.
* We maintained all 3 annotations across two or more annotators to analyze how closely and how often we agree with each other provided we are competent in our respective domains.
 
## Annotation Efficiency:
* We were keen on carrying out 100% inter-annotator agreement analysis by ensuring that each question was double-touched, so we would have at least two data points.
* We rotated the allocation such that it is not a consistent 500 question answer pairs for each individual and they would jump around the corpus to alleviate monotoneity.
* Furthermore, double touching 500 questions yields approximately 2000 annotations for a corpus of 1000 tokens as question answer pairs.

## Experience Bias:
* We noticed a bit of "experience bias" even internally within the group depending on how many years of Python coding all of us have been through.
For example, if one of us has three years of tenure as a software development engineer prior to this program in comparison to a teammate who recently picked up the skill during this program. Both such individuals would have relatively varying perspective regarding the complexity of such posts, and we did our due diligence by taking this into consideration and rating complexity along a Python learning curve as you would find in an introductory or advanced programming syllabus.

## Consistency Bias:
* We noticed a bit of "consistency bias" whereby monotonous activities such as the previously mentioned have a tendency for each subsequent token or post to blend together.
For example, reading many answers to the same question or many questions regarding the same topic has the tendency for each subsequent post to sound relatively analogous to the previous in complexity and text classification categories.  We attempted to alleviate the previously mentioned bias by allocating chunks of corpus in sets of 250 as opposed to assigning a consistent 500 tokens and this keeps the annotator engaged with a variety of posts.

## Quality Assurance:
* We aggregated the annotations across two or more annotators manually at first and then following a script to achieve similar results but expediting the process.
* For text classification, we were keen on selecting the best annotation between two or more annotators but realized it is best advised to include all of the above for visual representation of the agreement or disagreement.
* For complexity, we gave preference to the more difficult of annotation selections to alleviate experience bias between our tenured team members.
* For directness, we observed that nearly 95% of answers directly addressed the question and this became a default.  For QA, we considered if the default of "direct" was not selecting than we would err to the side of the alternative for benefit of doubt or in case the answer does hint at a different post rather than being a standalone response.
