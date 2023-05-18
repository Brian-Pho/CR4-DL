---
layout: post
title: "Complexity: A Guided Tour"
date: "2023-05-17"
categories:
  - Books
book_authors: "Melanie Mitchell"
excerpt: "A wide-ranging overview of the ideas underlying complex systems science."
---

## Preface

- Reductionism: the belief that a whole can be understood if you understand its parts and the nature of their sum.
- The antireductionist catch-phase, “the whole is more than the sum of its parts”, is becoming more prevalent as new sciences such as chaos, systems biology, evolutionary economics, and network theory move beyond reductionism to explain complex behavior.

# Part I: Background and History

## Chapter 1: What Is Complexity?

- A single ant or even one hundred ants don’t display intelligent behavior, and yet a half million ants form a superorganism with collective intelligence.
- Complex systems: an interdisciplinary field of research that aims to explain how large numbers of simple entities organize themselves into a collective whole that creates patterns, uses information, and, in some cases, evolves and learns.
- Colonies of social insects provide some of the richest and most mysterious examples of complex systems in nature.
- The cognitive scientist Douglas Hofstadter makes an analogy between ant colonies and the brain as both are complex systems with simple components that have limited communication among themselves, but gives rise to complicated and sophisticated system-wide (global) behavior.
- Review of neurons, soma, dendrites, axon, firing, and neurotransmitter.
- The similarity between neurons and ants is that they perceive signals from other individuals and a sufficiently summed signal causes the individuals to act in specific ways to produce more signals.
- The overall effects can be very complex.
- The immune system is another example of a system where simple components give rise to complex behavior involving signaling and control, and in which adaptation occurs over time.
- The immune system, like the brain, differs in sophistication in different species but the overall principles are the same across species.
- E.g. The immune system consists of many different types of cells distributed over the body that work together without any central control.
- Within the immune system, there’s a kind of Darwinian natural selection process where certain lymphocytes (B cells) secrete more antibodies the more they match an invader. So B cells gradually become better at adapting to the invader until the antibodies produced are extremely efficient at seeking and destroying an invader.
- The immune system is a kind of chemical signal-processing network where the recognition of an invader triggers a cascade of signals among cells.
- Economies are complex systems with the simple component being the buying and selling of goods, and the collective behavior is the complex actions of the markets as a whole.
- E.g. Market bubbles and crashes, the processing of news (information), and the adaptability of sellers and buys to adjust prices to match supply with demand.
- Yet another example of a complex system is the World Wide Web or Internet.
- Common properties of complex systems
    - Complex collective behavior
        - All complex systems consist of large networks of individual components each following simple rules with no central controller or leader.
    - Signaling and information processing
        - All complex systems produce and use information and signals from both their internal and external environments.
    - Adaptation
        - All complex systems adapt and change their behavior to improve their chances of survival or success.
- Complex system: a system in which large networks of components with no central control and simple rules of operation gives rise to complex collective behavior, sophisticated information processing, and adaptation via learning or evolution.
- Other definitions of a complex system include complex adaptive system (when adaptation plays a large role) and self-organizing systems (systems without a controller or leader).
- How do we measure complexity? How complex is a system?
- No single science of complexity nor single complexity theory exists.

## Chapter 2: Dynamics, Chaos, and Prediction

- Dynamical systems theory (dynamics): the description and prediction of systems that exhibit complex changing behavior.
- E.g. Solar system, heart, brain, global climate, stock market.
- No notes on the work by Aristotle, Galileo, and Newton.
- Mechanics is divided into two areas:
    - Kinematics: describes how things move.
    - Dynamics: why things obey the laws of kinematics.
- The idea of chaos is that there are some systems where small uncertainties in initial measurements result in large errors in long-term predictions.
- Not all natural systems are chaotic.
- E.g. We can predict moon eclipses with almost perfect certainty despite relatively large uncertainties in measuring the moon’s position.
- How does a chaotic system magnify the initial uncertainties?
- The key property is nonlinearity.
- In a linear system, the whole is equal to the sum of its parts.
- E.g. One dollar left for ten years is one dollar.
- In a nonlinear system, the whole is different from the sum of its parts.
- E.g. One dollar left for ten years with 10% interest is 2.59 dollars.
- The whole is different because the parts interact to create something new.
- No notes on the logistic map equation and attractor state.
- Three types of attractors
    - Fixed-point
    - Periodic
    - Chaotic
- The apparent randomness of chaotic attractors is surprising and can arise from very simple deterministic systems.
- The presence of chaos in a system implies that perfect prediction is impossible both in practice and in principle.

## Chapter 3: Information

- Many scientists use the concept of information to characterize and measure order (simplicity) and disorder (complexity).
- Review of energy, work, and entropy.
- Claude Shannon’s definition of information completely ignores the meaning of the message and only accounts for how often the source sends each of the different possible messages to the receiver.
- Information: the predictability of a message source.

## Chapter 4: Computation

- The notion of computation has come a long way since the early days of computers and encompasses cells, tissues, plants, immune systems, and financial markets.
- Information is processed by computation.
- Review of Godel’s Incompleteness Theorem and Turing’s work on the Halting problem.
- Turing’s insight was that the input on the tape could be interpreted as either a program or as input to another program.

## Chapter 5: Evolution

- Review of Darwin’s theory of evolution.
- Evolution: gradual change.
- The result of evolution by natural selection is the appearance of “design” with no designer.
- The appearance of design comes from chance, natural selection, and long periods of time.

## Chapter 6: Genetics, Simplified

- Skipping this chapter due to knowing the basics of genetics.

## Chapter 7: Defining and Measuring Complexity

- We don’t have a unified definition of complexity but that’s ok because science often makes progress by inventing new terms to describe incompletely understood phenomena.
- E.g. Gene, consciousness, dark matter.
- Measures of complexity
    - Size
        - This isn’t a good measure of complexity because the quantity of components doesn’t always translate into meaningful differences.
        - E.g. Lack of unique components or lack of interaction among components.
    - Entropy
        - The amount of information content or amount of surprise a message source has for a receiver.
        - Also isn’t a good measure because the highest entropy is achieved by sending random messages.
        - Most complex entities aren’t the most ordered or most random but are somewhere in between.
    - Algorithmic information content
        - This is the size of the shortest computer program that could generate a complete description of the object; also called compression.
        - Entities with a predictable/repeating structure have low effective complexity.
        - The problem here is how we figure out what the regularities are.
        - There’s an analogy here with scientific theory formation, which is a process for finding regularities about natural phenomena.
        - For any given phenomenon, there are many possible theories that express its regularity but some theories—the simpler and more elegant ones—are better than others.
        - This is also called Occam’s Razor.
    - Logical depth
        - A measure of how difficult that object is to construct.
        - The result is similar to algorithmic information content: nice theoretical properties that match our intuitions, but no practical way of measuring the complexity of actual objects.
    - Thermodynamic depth
        - Instead of measuring the number of steps needed to construct the description of an object, thermodynamic depth starts by determining the most plausible scientifically determined sequence of events that leads to the object.
        - It measures the total amount of thermodynamic and informational resources required by the physical construction process.
        - Like logical depth, this measure has problems with practically measuring complexity.
    - Computational capacity
        - A measure of what a complex system can compute.
        - However, the ability to perform complex calculations doesn’t mean that the system itself is complex nor that it uses such ability.
    - Statistical complexity
        - Measures the minimum amount of information about the past behavior of a system to optimally predict the system’s future behavior.
    - Fractal dimension
        - All of the complexity measures we’ve discussed so far have been based on information or computation theoretic concepts.
        - But these aren’t the only possible measures of complexity.
        - Fractal: self-similarity at different scales/levels.
        - Dimension: when each level is made up of smaller copies of the previous level.
    - Degree of hierarchy
        - Herbert Simon defines a complex system as one composed of subsystems that, in turn, have their own subsystems and so on.
        - This is similar to the idea of fractals where there are self-similar patterns at all scales.
        - In hierarchical complex systems, there are many more strong interactions within a subsystem than between subsystems.
        - Simon suggests that the study of complex systems needs a theory of hierarchy.

# Part II: Life and Evolution in Computers

## Chapter 8: Self-Reproducing Computer Programs

- There’s still no agreement among scientists and the general public on the definition of life.
- The goal of creating artificial life links the previous topics of computation, life, and evolution.
- The essence of a self-reproducing entity, whether it be life or a computer program, is the dual use of information both as instructions to be executed and as data to be used by those instructions.
- E.g. Godel’s “This statement is not provable” and Turing’s proof of the undecidability of the Halting problem.
- This dual use of information is also key to how DNA replicates itself.
- The instructions for building objects that read DNA (mRNA, ribosomes, etc.) are encoded in the DNA itself.
- DNA not only contains the code for its self-replicating program—the enzymes that split and copy DNA—but it also encodes the cellular machinery that translates DNA into those very enzymes.

## Chapter 9: Genetic Algorithms

- Review of genetic algorithms.

# Part III: Computation Writ Large

## Chapter 10: Cellular Automata, Life, and the Universe

- The behavior of ant colonies can be thought of as computation.
- In the previous chapter, we explored the notion of life and evolution occurring in computers.
- In this chapter, we explore the opposite: when computation occurs in nature.
- At a high level, we can say that computation is what a complex system does with information to achieve its goal.
- In the von-Neumann architecture, RAM stores both program instructions and data, and the CPU fetches instructions and data from memory to execute the instructions on the data.
- In nature, the division between storage and processing of data is blurred.
- Cellular automaton: a grid of cells where a cell turns on or off in response to its local neighborhood.
- E.g. Conway’s game of life.
- The cellular automaton is an idealized model of a complex system because both have large numbers of simple components with no central controller and each component only communicates with a small fraction of the other components.
- The automaton is also equivalent to a universal Turing machine and encodes both the program (rules) and data (state).

## Chapter 11: Computing with Particles

- In general, it’s difficult to design cellular automata to perform tasks that require collective decision making among all cells.
- Perhaps neurons are the scaffolding for information-carrying waves of activity and their information-processing interactions.

## Chapter 12: Information Processing in Living Systems

- How does information in a computer acquire meaning?
- The meaning of the input and output information in a Turing machine comes from its interpretation by humans.
- No notes on the immune system, ant colony, and biological metabolism.
- In these systems, information isn’t precisely located in any particular place in the system, but instead takes the form of statistics and dynamics of patterns over the system’s components.
- A consequence of encoding information as statistical and dynamical patterns of low-level components is that no component of the system can perceive the overall state of the system.
- Instead, information is communicated by spatial and temporal sampling.
- Given the statistical nature of the information, the system needs to have random components to deal with unforeseen circumstances.
- E.g. Lymphocytes have randomly generated receptors to manage the infinite variety of pathogens. Forager ants follow random paths unless attracted by pheromone trails. Cellular metabolism relies on the random diffusion of molecules and on chance encounters between molecules.
- Intrinsic random and probabilistic components are needed for a small population of components to explore an enormously large space of possibilities.
- However, this randomness is balanced with self-regulation as complex adaptive systems adjust to probabilities of where the components should be, what actions they should take, and how to deeply explore particular pathways in these large spaces.
- This is the exploration-exploitation tradeoff.
- At all times, different paths are dynamically allocated exploration resources in proportion to their relative promise. However, unpromising paths continue to be explored, albeit with fewer resources.
- Early explorations, which are based on little to no information, are mostly random and unfocused.
- As information is obtained and acted on, exploration gradually becomes more deterministic and focused in response to what’s been perceived by the system.
- The system both explores to obtain information and exploits that information to successfully adapt.
- How information takes on meaning is a challenging question to answer.
- The meaning of information comes from its purpose; it’s utility to the organism.
- Who or what perceives the meaning of situations to take appropriate actions?
- This is essentially the question of what constitutes consciousness or self-awareness in living systems.

## Chapter 13: How to Make Analogies (if You Are a Computer)

- Sensitivity to context: a mutual understanding between communicators where information is drawn from the context.
- E.g. When we say “put your shoes on” we mean “put your shoes on your feet” and not to put your shoes on your head.
- We also call this common sense.
- Analogy: the ability to perceive abstract similarity between two things in the face of superficial differences.
- E.g. Recognizing that cats in pictures, text, and real life are all instances of the same concept. Recognizing the letter “P” in different fonts.
- Humans have an impressive ability to perceive analogies; abstract similarities between different entities or situations.
- One solution to the exploration/exploitation tradeoff is what ants and our immune system do. Both systems use randomness to explore and positive feedback to exploit.
- No notes on the author’s Copycat program.

## Chapter 14: Prospects of Computer Modeling

- Review of the Prisoner’s Dilemma and its variants.

# Part IV: Network Thinking

## Chapter 15: The Science of Networks

- The idea of people’s social network as a small world linked by six degrees of separation is a myth.
- Review of network science (node, edge, hub, small-world, scale-free).

## Chapter 16: Applying Network Science to Real-World Networks

- No notes on this chapter.

## Chapter 17: The Mystery of Scaling

- No notes on how an organism’s metabolism scales with body mass, volume, and surface area.
- Two questions on metabolic scaling
    - Why does metabolic scaling follow a power law?
    - Why does it follow the particular power law with exponent 3/4?
- The metabolic scaling theory attempts to answer both questions.
- The theory proposes that the organization with the most space-filling geometry is fractal branching, and fractal branching results in a model where the rate that fuel is delivered to cells scales with body mass to the 3/4 power.
- Another way to think about the theory is that evolution structured our circulatory systems as fractal networks to approximate a fourth dimension to make our metabolisms more efficient.
- No notes on Zipf’s law (a power law for words).

## Chapter 18: Evolution, Complexified

- No notes for this chapter.

# Part V: Conclusion

## Chapter 19: The Past and Future of the Sciences of Complexity

- The future of complexity science depends on better-defined terms and on a new kind of mathematics.
- It’s essential to have the right conceptual vocabulary and the right mathematics to understand, predict, and control self-organizing systems with emergent properties.
