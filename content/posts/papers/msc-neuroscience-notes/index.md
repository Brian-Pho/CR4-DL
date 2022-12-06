---
layout: post
title: "MSc Neuroscience Paper Notes"
date: "0000-00-00"
categories:
  - Papers
excerpt: "My academic paper notes during my masters degree."
---

## Intersubject Correlation (ISC)

### Measuring shared responses across subjects using intersubject correlation

- By leveraging one individual’s brain activity to model another’s, we can measure shared information across brains.
- Paper develops the logic of intersubject correlation (ISC) and discusses the family of neuroscientific questions that stem from this approach.
- ISC circumvents the need for a pre-defined response model and allows experimenters to measure the consistency of neural responses to complex, naturalistic stimuli across individuals.
- Review of subtraction and parametric fMRI experimental designs.
- ISC analyses provide a complementary, data-driven alternative for identifying brain regions with activity driven by the stimuli or paradigm.
- Correlating brain activity across subjects while they’re exposed to a complex stimulus reveals brain areas that process the stimulus in a consistent, time-locked manner.
- Correlations approaching 1 mean that the region encodes information about the stimulus, while correlations approaching 0 mean that the region encodes little information about the stimulus.
- ISC analysis relies on subjects receiving the same time-locked stimulus.
- FIG 1 <https://i.imgur.com/lC7olsG.png>
- ISC is a tool to detect and quantify shared, stimulus-locked responses and is insensitive to idiosyncratic responses for a subject -  a fact that needs to be considered carefully when interpreting results.
- ISC analysis effectively filters out subject-specific signals and reveals voxels with a consistent, stimulus-evoked response time series across subjects.

Part I: Extensions and Applications

- ISC can also be used to investigate the functional integration (connectivity) of diverse brain regions during stimulus processing.
- We infer that two brain regions are functionally connected if their activity fluctuates in concert.
- Intersubject functional correlation (ISFC): computing the correlation between the activity of two brain regions not only within a subject, but across different subjects.
- ISC can be thought of as a subset of ISFC analysis since ISC only compares the same brain regions across subjects, while ISFC compares a brain region to all other brain regions across subjects.
- ISFC can be used to generate a functional connectivity matrix: an intersubject functional correlation matrix.
- FIG 3 <https://i.imgur.com/rGh330T.png>
- Another way to extend ISC is to compute the spatial ISC at each time point, yielding a correlation matrix analogous to the ISFC matrix, but over time rather than space.
- FIG 4 <https://i.imgur.com/Om5LtZz.png>
- This matrix resembles a time point representational dissimilarity matrix (RDM) as constructed using representational similarity analysis (RSA), but pairwise dissimilarities are computed across subjects rather than within subjects.
- Spatial and temporal ISC, while related in many cases, can be used to reveal different sources of shared responses across subjects.
- FIG 5 <https://i.imgur.com/0Tz9FqO.png>
- ISC analyses can be used to measure commonalities in stimulus-evoked processing across imaging modalities, such as fMRI, ECoG, EEG, and fNIRS.
- E.g. Minor stimulus changes, such as an occasional word substitution in a spoken story, can radically change the narrative interpretation despite surface-level similarity.

Part II: Practical Considerations

- For traditional GLM analysis, to increase design efficiency, it’s best to keep the stimulus short because longer stimulus blocks deposit the signal in lower, noisier frequencies.
- For ISC, it’s important that stimuli are presented with exactly the same timing for all subjects.
- Because the only thing in common between subjects across time is the experimental paradigm, this cross-subject relationship must be mediated by the paradigm - there is mutual information between the stimulus and the neural response.
- Significant ISC reveals that there’s a relationship between brain activity and the stimulus, but it doesn’t reveal the nature of that relationship.

Limitations

- ISC analyses require the fluctuations of brain activity to roughly correspond across individuals in both time and space.
- Use BrainIAK for ISC analysis in Python: <https://brainiak.org/>

### Intersubject Synchronization of Cortical Activity During Natural Vision

- To what extend do all brains work alike during natural conditions? Do we all see the world in the same way?
- Experimented on five subjects freely viewing 30 min popular movie under fMRI.
- Used the spatiotemporal activity patterns in one brain to model activity in another brain.
- Found striking levels of voxel-by-voxel synchronization between individuals.
- Results reveals a surprising tendency of individual brains to “tick collectively” during natural vision.
- Natural vision vs conventional visual mapping
    - Visual stimuli aren’t isolated and are embedded in a complex multiobject scene.
    - Objects move in a complex manner.
    - Subjects freely move their eyes.
    - Seeing usually interacts with additional modalities.
- Unbiased type of analysis
    - In the intersubject correlation (ISC) analysis, paper used the voxels’ time courses of one brain to predict the activity in other brains. This across-subject voxel-by-voxel synchronization is referred to as “intersubject dimension”.
    - In the reverse-correlation analysis, paper used the brain activations themselves to find the preferred stimuli (instead of the classic approach of using the stimuli to determine the function of a brain region).
- To examine the intersubject dimension
    - Normalized all brains to a Talairach coordinate system
    - Spatially smoothed the data
    - Use the time course of each voxel in a given source brain to predict the activation in the corresponding voxel of the target brain
- With 5 subjects, there are 10 unique pairwise comparisons.
- Over 29% of the cortical surface showed a highly significant intersubject correlation during the movie.
- FIG 1 <https://i.imgur.com/j9eaHGO.png>
- The across-subject correlation covered most of the visual system and extended beyond the visual and auditory cortices.
- Used darkness as a control condition to rule out across-subject correlations due to scanner noise or preprocessing.
- What’s the source of the strong ISC? Two components of ISC
    - A wide-spread, spatially nonselective activation wave that was apparent across cortical areas.
    - A selective, regionally distinct component, associated with specific functional properties of individual cortical regions.
- In the “reverse-correlation” approach, the analysis used the peaks of activation in a given region’s time course to recover the stimulus events that evoked them, thus constructing a regionally specific “movie” based on the frames that evoked strong activation in a particular ROI.
- Applying reverse correlation revealed a substantial component of emotionally charged and surprising moments in the original movie.
- There was remarkable category selectivity for faces in the fusiform face-related region and for indoor/outdoor scenes in the building-related region.
- The fusiform face-related and collateral building-related regions maintained their selectivity even under free viewing of natural and complex scenes.
- A cortical regions with unexpected selectivity was the middle postcentral sulcus (PCS) which showed highly correlated activations with the performance of delicate hand movements during various motor tasks.
- Paper reports the unexpected finding that brains of different individuals show a highly significant tendency to act in unison during free viewing of a complex scene.
- Results imply that a large extend of the human cortex is stereotypically responsive to naturalistic audiovisual stimuli.
- The ISC measure critically doesn’t depend on any prior knowledge or assumptions regarding the functionality of brain areas.
- Paper also found a pattern of areas which consistently failed to show ISC including the supramarginal gyrus, angular gyrus, and prefrontal areas.
- Two unrelated components of ISC
    - Nonselective activation component.
        - Could be due to the feed-forward processing of the visual system or reflect the global attentional and arousal impact of scenes.
    - Selective activation component.
        - Results are consistent with the fact that high-order object areas aren’t sensitive to changes in eye movement.
        - The finding that selectivity didn’t decrease with the movie’s spatiotemporal complexity points to the efficient operation of selection mechanisms.
- The unified nature of conscious experience consists of temporally interleaved and highly selective activations in an ensemble of specialized regions, each of which picks up and analyzes its own unique subset of stimuli according to its functional specialization.
- The collective correlation attests to the engaging power of the movie to evoke a remarkably similar activation across subjects.

### What binds us? Inter-brain neural synchronization and its implications for theories of human consciousness

- Paper argues that evidence of inter-brain synchronization in the fastest frequency bands overcomes the most convincing skeptical position.
- Studies show that synchrony during joint action promotes cooperative ability and increases empathy, liking, rapport, and prosocial behavior.
- Hyperscanning allows for the investigation of neural relations at the intra- and inter-brain level, making it s relevant technique for understanding the neural basis of social interaction.
- Paper aims to examine findings of EEG-based hyperscanning studies and highlight the importance of inter-brain neural synchronization for the study of consciousness.
- Neural oscillations are considered to cause information transfer and integration since they can change the functional interactions between brain areas.
- Cognitive processes require the transient coalition of several, widely distributed, and interacting neuronal groups and this large-scale dynamical integration is accomplished by phase synchronization of cell assemblies.
- It’s suggested that the neural basis of consciousness is likely to be at the level of large-scale interactions over several frequency bands of oscillatory neural activity.
- Tasks requiring cooperation, coordination, and joint attention in individuals show that greater inter-brain oscillatory synchronization is associated with enhanced performance and can predict team efficiency.
- Tasks with a greater need for cooperation are associated with a higher level of inter-brain synchronization.
- Skipped the rest of the paper due to disinterest.

### Shared understanding of narratives is correlated with shared neural responses

- How does the brain represent subtle, idiosyncratic differences in the interpretation of abstract and ambiguous narratives?
- Using intersubject representational similarity analysis that compared interpretation similarity and neural similarity across subjects, paper found that the more similar two people’s interpretations of story, the more similar their neural responses were.
- These shared responses (in the default model network (DMN) and fronto-parietal network) were modality invariant.
- Narratives elicit correlated neural responses across subjects in regions of the DMN such as
    - Temporal parietal junction (TPJ)
    - Angular gyrus
    - Temporal poles
    - Posterior medial cortex (PMC)
    - Medial prefrontal cortex (mPFC)
- Shared neural responses are greater among subjects who shared interpretations than between subjects with contradictory interpretations.
- Scanned subjects while watching a 7-min animated movie.
- Used both intersubject correlation analysis (ISC) and intersubject representational similarity analysis (RSA).
- Use latent semantic analysis (LSA) to measure interpretation similarity between pairs of subjects.
- LSA was performed on the recall transcript that each subject did after either watching the movie or listening to the story.
- To test the hypothesis that subjects who share interpretations of the stimuli show greater neural similarity, the paper compared ISC between groups of subjects.
- Statistical significance of ISC was assessed using a permutation test.
- Does the shared understanding result from shared neural responses or is it the other way around?
- Similarity between neural patterns elicited by similar interpretation of the same narrative demonstrates modality invariance and the strong social natural of the DMN.

## Machine Learning

### The Next Big Thing(s) In Unsupervised Machine Learning: Five Lessons from Infant Learning

- Developmental science of infant cognition might hold the key to unlocking the next generation of unsupervised learning approaches.
- Infant learning vs unsupervised learning
    - Rapid and from few examples
    - Robust representations that can be used flexibly and efficiently
- The paper proposes five crucial factors enabling infants’ quality and speed of learning.
- Current problems with DL
    - Large-scaled, well-curated data sets
    - Not efficient nor expandable
- Focused on the developmental learning during the first 12 months of life.
- Five lessons from developmental science: Key enablers of growing a mind
    1. Babies’ information processing is guided and constrained from birth
        - It’s a mistaken belief that the infant brain architecture isn’t mature; a lot of structure is already present.
        - Structural connectivity patterns in infants are very similar to adult structural connectivity.
        - Functional area activation is also similar to adults.
        - Newborns also show a bias and this differs from inborn knowledge in that they’re part of the learning mechanism but not directly inherited.
        - The earliest information processing is constrained by neural architecture and guided by cognitive biases.
        - Importance in the starting conditions and in the pre-wiring and pre-training of neural networks.
        - Infants don’t have to start their developmental trajectory from a blank slate and neither should neural networks.
    2. Babies are learning statistical relations across diverse inputs
        - Infants readily learn associations. E.g. Sensorimotor handling of objects, voices and faces, and language.
        - Major difference between infant and NN statistical learning is the multi- and cross-modal nature of infants’ learning processes.
        - E.g. Visual and auditory, visual and tactile, auditory and tactile, and external and bodily signals.
        - Suspect the mechanism is the detection of temporal synchrony.
        - Much greater need for learning from diverse multimodal inputs than one might guess necessary for unimodal tasks.
    3. Babies’ input is scaffolded in time
        - Changes in sensory and motor possibilities (such as crawling and walking) not only allow infants to explore different aspects of their environment, they also drive the expansion of the range of obtained inputs in the direction of increasingly varied stimuli and in complex combinations of the stimuli.
        - This development leads naturally to a phased-structure in their learning input and creates a guided curriculum for infant learning.
        - Critical periods reflect a moment of peak plasticity during a specific developmental state.
        - The initial learning (critical period) plays a key role in determining the outcome of the training processes, and shortcomings/biases during early training may not be recoverable.
        - Catastrophic forgetting is also a result of the stability/plasticity dilemma where new knowledge overwrites rather than integrates with previous knowledge.
        - The quest to achieve continual learning without overwriting previously acquired knowledge remains unfinished.
    4. Babies actively seek out learning opportunities
        - Infants play an active role in directing their attention to stimuli to learn.
        - E.g. Curiosity-driven learning, active learning, learning by intrinsic motivation.
        - Three levels of arousal
            - Relaxation (low arousal)
            - Curiosity (optimal/middle arousal)
            - Anxiety (high arousal)
        - Infants attend significantly longer to stimuli at an intermediate level of complexity (at the bottom of the U-shaped curve of attention as a function of novelty or complexity).
        - It’s suspected that this depends on the degree of encoding of the stimulus.
        - Curiosity can been coded into NN in many different ways.
        - E.g. Attending to inputs for which predictability is minimal or maximal, seeing out information as a function of its compressibility, maximizing stimulus novelty relative to its internal states.
        - One paper created an agent with a world-model that learned to predict the consequences of the agent’s actions, and a meta-cognitive self-model that tracks the performance of the world-model. The self-model was able to improve the world-model by adversarially challenging it.
        - Instead of attention allocation, active learning can also use active intervention for learning.
    5. Babies learn from other agents
        - Parental scaffolding where parents help and guide their infant and the quality of play increases to an extent that couldn’t have been achieved by the infant alone.
        - Learning by observation and imitation has been explored too.
        - Would parenting an algorithm not make it supervised learning?
        - By being a meta-learner, parents/teachers can push infants to enter a new, steeper learning curve.
- Improving the quality, flexibility and efficiency of learned representations will directly translate to improved ML performance.
- The current approach to unsupervised ML, to remove targeted interference in the learning processes as much as possible and leave everything to be learned from the data, stands in stark contrast to infant learning.
- Two overarching insights from the five lessons
    - There is more structure to constrain and guide infants’ learning processes.
    - Infants’ learning opportunities are more flexible and richer.

### Functional connectivity magnetic resonance imaging classification of autism

- The whole-brain distribution of connectivity abnormalities in autism isn’t well characterized.
- They achieved a classification sensitivity of 83%, specificity of 75%, and total accuracy of 79%.
- Brain regions showing greatest differences included regions of the default mode network, superior parietal lobule, fusiform gyrus and anterior insula.
- Most replicated abnormality of autism has been the underconnectivity of distributed brain networks.
- Despite extensive evidence that autism is fundamentally a disorder of brain connectivity, we lack a framework for describing the distribution of connectivity abnormalities.
- Paper uses a data-driven approach to characterize whole-brain functional connectivity abnormalities in a dataset of adolescents and young adults with autism and controls, and to determine whether these abnormalities can accurately classify individual subjects with autism.
- Classification method not specified.

## Other

### The primacy of behavioral research for understanding the brain

- Understanding the brain means two things
    - What does the brain do?
    - How does it do it?
- Paper argues that behavior is often more useful than neuroscientific measurements for answering the first question.
- Neuroscience is focused more on the level of neurons than on the level of organisms.
- Neural firing patterns are the wrong level for investigating many pressing questions in neuroscience.
- An example of how a full neural description guarantees very little understanding is the worm C. elegans.
- We have the full connectome of C. elegans and yet are unable to explain its behavior.
- Cutting-edge methods for recording and manipulating the brain have, for the most part, verified what we already knew from behavior, rather than led to novel insight.
- Brain perturbation studies are necessary for answering questions about localization, but behavior remains the standard for theories about the roles and computations carried out by different neural structures.
- What has neuroscience taught us about cognition that we didn’t already know from behavior?
- Paper argues that we have “not [learned] very much at all.”
- One example is that scientists were able to infer that color vision is due to three types of neurons, which was later verified by physiologists.
- Key example
    - Assume a T-shaped maze and a rat must choose which arm to travel to obtain food.
    - To remember the location of food, the rat either uses internal, egocentric cues such as turning right, or it uses external, environmental cues such as an arrow or window.
    - Imagine you could record activity from anywhere in the rat’s brain during this experience, how could you determine which strategy the rat was using?
    - It’s extremely difficult to determine the rat’s strategy from its neural activity.
    - Perturbing the rat’s brain wouldn’t work either as by manipulating the brain, we can find out what brain areas can affect behavior on this task, but not what brain areas do affect behavior.
    - A simple modification of the maze (turning it 180 degrees) lead to the insight that rats use external cues to decide.
- Another example is that of reinforcement learning (RL). From behavioral studies, it was worked out that dopamine is a key neurotransmitter in prediction of errors.
- RL is a prime case of behavior and computation informing our understanding of neural mechanisms, not the other way around.
- In recent years, the rise of neuroscience has been accompanied by a disdain of behavioral research.
- Major neuroscience organizations, such as The Journal of Neuroscience and the National Institute of Mental Health, all share the implicit/explicit assumption that behavior can’t lead to valid neuroscientific findings.
- Examples of true discoveries about perception and cognition that weren’t know from studies of behavior include
    - Hodgkin-Huxley Action Potential Model.
- Paper argues that a combination of behavioral and neural measurements leads to the best insights. Pure behavioral research is not only critical for understanding the mind, it’s also important for understanding how mental processes are implemented in the brain.
- There’s a strong bias in neuroscience for causal manipulation (E.g. optogentics) rather than correlational measurements (fMRI).
- Because behavioral work is sometimes easier and often cheaper, its findings are worth less and findings from expensive neuroscientific research.

### Towards readable code in neuroscience

- Code has become central to neuroscience, and the neuroscience community must take steps to ensure its reproducibility and best coding practices.
- Mistakes in scientific software can have profound impacts.
- E.g. Five manuscripts had to be retracted after a software issue and a bug in a common fMRI analysis implementation raises questions about the results of over 3000 articles.
- Code is readable if others can easily understand and modify it.
- The tolerance of writing scientific code that doesn’t need to follow best practices has subtle implications that affect researchers, labs, and the community.
- Value of readable code
    - Code will more often be read than written.
    - Projects than span a long timescale will benefit from readability as this saves time in the future, reducing technical debt.
    - Benefits lab colleagues and collaborators.
    - Readable code is more likely to be readily corrected and to remain usable for longer.
- What can researchers do?
    - Reuse existing code
    - Break down code
    - Document code
- Comments are most useful when they provide context for the reader by describing how a piece of code can be used, why it’s necessary or why it’s implemented in a particular way.
- Multiple measures exist to ensure the quality of scientific writing.
- E.g. Writing workshops, mentorships, and detailed reviewer feedback.
- Why shouldn’t similar structures exist for code?

### Towards a second-person neuropsychiatry

- Psychiatric disorders as disorders of social interaction, rather than social observation.
- The reciprocal cycle between difficulties in social interactions and the risk of developing a psychiatric disorder.
- Are social impairments due to disorder-specific or disorder-general mechanisms?
- Social cognition: the processes by which people make sense of people.
- Second-person: instead of viewing social cognition from an observer’s/third point of view, we should view it as different when engaging in social interaction.
- In essence, seeing isn’t the same as doing.
- Second-person neuroscience should target the neural mechanisms of social interaction rather than social observation.
- Paper argues for the view that psychiatric disorders are more commonly characterized by impairments of social interaction rather than social observation.

### Covert Speech Comprehension Predicts Recovery From Acute Unresponsive States

- Recruited 21 patients with acute traumatic brain injury who were 2-7 days sedation-free and failed to obey commands.
- Patients listed to streams of isochronous monosyllabic words while their brain activity was measured using EEG.
- In healthy people, EEG only synchronizes with the rhythm of phrases and sentences when listeners consciously comprehended the speech.
- This provides a measure of residual speech comprehension in unresponsive patients.
- Results
    - No significant correlation between words and outcome at 3/6 months.
    - Strong correlations between phrases and sentences and outcome at 3/6 months.
- The strength of each patient’s evidence for speech comprehension augmented the accuracy of prognoses at 3 and 6 months.
- But why?
- This approach may therefore significantly reduce prognosis uncertainty in a critical phase of medical decision making.
- However, we should also be careful that such command-follow approaches risk considerable false negative results due to their high cognitive demands.
- Does EEG tracking of high-level linguistic structures in the acute phase postinjury indicate that these patients are conscious of what they hear?
- It’s impossible to say as we can’t directly infer another person’s conscious state.
- Nevertheless, tracking of high-level linguistic structures vanishes in sleep and isn’t evident when listening to speech in a language that one doesn’t understand.
- Cortical tracking of the meaning of speech increases the accuracy of prognoses at 3 and 6 months for patients in acute post-traumatic unresponsive states relative to prognoses made solely on the basis of standard clinical characteristics.
