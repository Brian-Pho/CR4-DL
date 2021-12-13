---
layout: post
title: "Artificial Intelligence: A Modern Approach (Incomplete)"
date: "2019-04-10"
categories:
- Textbooks
book: "artificial-intelligence-a-modern-approach"
book_authors: "Stuart Russell, Peter Norvig"
excerpt: "An incomplete set of notes from the artificial intelligence textbook."
---

<blockquote class="blockquote">
  <p>But AI research is full of twists and turns, so who knows what the future holds? Perhaps the next big wave will be based more closely on the neuroscience results from the last few years. Or perhaps some new experimentally developed framework will emerged. I have my own ideas on what will unfold, but really, we’ll just have to see what happens.</p>
  <p class="blockquote-footer">Unknown, Reddit</p>
</blockquote>

# NOTE: This is an incomplete set of notes.

# Part I: Artificial Intelligence

## Chapter 1: Introduction

- The field of artificial intelligence isn’t just to understand intelligence, but to also build intelligent entities.
- AI is relevant to any intellectual task; it’s truly a universal field.
- There are two dimensions that we can define AI
    - Thought processes and reasoning versus behavior
    - Human performance versus ideal performance
- Are you concerned with thinking or behavior? Do you want to model humans or work from an ideal standard?
![Figure 1.1](figure1-1.png)
- This book views intelligence as rational action. An intelligent agent takes the best possible action in a situation.
- Personally, I believe in the left side of figure 1.1 and this book takes the bottom right approach. I will continue though just to see what’s on the other side.
- *Natural language processing*: the ability to communicate using natural language.
- *Knowledge representation*: to store what it knows and senses.
- *Automated reasoning*: to use its memory to answer questions and to draw new conclusions.
- *Machine learning*: to update its memory to adapt to new circumstances.
- *Computer vision*: to perceive objects.
- *Robotics*: to manipulate objects.
- The quest for "artificial flight" succeeded when the Wright brothers stopped imitating birds and started using aerodynamics.
- Aeronautical engineering texts don’t define the goal of their field as making "machines that fly so exactly like pigeons that they can fool even other pigeons."
- *Dualism*: that there’s a part of the human mind that is outside of nature and is exempt from physical laws.
- *Materialism*: that the brain’s operation according to the laws of physics constitutes the mind.
- *Induction*: that general rules are acquired by exposure to repeated associations.
- The connection between knowledge and action is important because intelligence requires action as well as reasoning. Is it?
- Work in economics and operations research has contributed much to our notion of rational agents, yet for many years AI research developed along entirely separate paths.
- One reason was the apparent complexity of making rational decisions.
- *Satisficing*: making decisions that are "good enough" to reduce computations.
- A collection of simple cells can lead to thought, action, and consciousness. Brains cause minds.
- Behaviorism was a response to the lack of objective evidence in psychology. Introspection wasn’t taken as reliable evidence.
- Three key steps of a knowledge-based agent
    - A stimulus is translated into an internal representation
    - The representation is manipulated by cognitive processes to derive a new internal representation
    - The new internal representation is retranslated back into action
- For AI to succeed, we need two things, intelligence and an artifact. The computer has been the artifact of choice.
- The development of computer hardware has slowed down due to power dissipation problems. So manufacturers started to increase the number of cores rather than clock speed.
- It’s expected that future increases in computing power will come from massive parallelism, a curious convergence with the properties of the brain.
- AI also owes a debt to the software side of computer science, which has supplied the operating systems, programming languages, and tools needed to write modern programs (and papers about them).
- "The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."
- AI needed to become a separate field because
    - It embraces the idea of duplicating human faculties
    - It is a branch of computer science
- *Physical symbol system hypothesis*: any system exhibiting intelligence must operate by manipulating data structures composed of symbols.
- The fact that a program can find a solution in principle does not mean that the program contains any of the mechanisms needed to find it in practice.
- One might say that to solve a hard problem, you have to almost know the answer already.
- Computer science focuses on algorithms but AI suggests that we should also focus on data.
- *Knowledge bottleneck in AI*: the problem of how to express all the knowledge that a system needs.
![Questions 1.9 to 1.13](question1-9_1-13.png)

## Chapter 2: Intelligent Agents

- *Agent*: anything that perceives and acts upon an environment.
![Figure 2.1](figure2-1.png)
- *Performance measure*: evaluates the behavior of the agent in an environment.
- *Percept sequence*: the complete history of everything the agent has ever perceived.
- The agent function is an abstract mathematical description; the agent program is a concrete implementation, running within some physical system.
- *Rational agent*: an agent that maximizes its performance measure given what it knows.
- Success must be an external measure or else the agent could delude itself into thinking that its performance was perfect.
- As a general rule, it’s better to design performance measures according to what one actually wants in the environment, rather than according to how one thinks the agent should behave.
- Rationality depends on four factors
    - The performance measure that defines success
    - The agent’s prior knowledge of the environment
    - The agent’s actions
    - The agent’s percept sequence
- Omniscience is different from rationality in that an omniscient agent knows the actual outcome of its actions while the rational agents knows the expected outcome of its actions.
- Actions of a rational agent
    - Gather information through observation and exploration
    - Learn by adapting to new information
    - Autonomous by compensating for partial or incorrect knowledge
- This chapter shows why I disagree with the rational approach. It requires too much data and decision making that even people don’t/can’t do. We don’t need to make the best choices to be intelligent.
- Types of environment
    - Fully observable vs partially observable
    - Single agent vs multiagent
    - Competitive vs cooperative
    - Deterministic vs stochastic
    - Episodic vs sequential
    - Static vs dynamic
    - Discrete vs continuous
    - Known vs unknown
- The hardest case is partially observable, multiagent, stochastic, sequential, dynamic, continuous, and unknown.
- An agent is made up of its architecture (hardware) and its program (software).
- The agent’s program could be table mapping inputs to outputs.
- However, this approach is doomed to fail because of the combinatorial explosion.
- Instead of memorizing all of the possible actions from inputs to outputs, we can calculate the action at the time of need.
- E.g. Huge paper tables of square roots vs five-line program for Newton’s method
- Four basic kinds of agent programs
    - *Simple reflex*: follows condition-action (if-then) rules
    - *Model-based reflex*: maintains an internal state (model) of the environment
    - *Goal-based*: has information that describes desirable environment states
    - *Utility-based*: has an internal performance measure of how close it is to the goal
    - *Learning*: the process of modifying the agent to improve its performance
- Three types of representations
    - *Atomic*: each state is indivisible
    - *Factored*: each state can be split into variables or attributes
    - *Structured*: things are related to each other

# Part II: Problem-solving

## Chapter 3: Solving Problems by Searching

- How an agent can find a sequence of actions that achieves its goals when no single action will.
- Intelligent agents are supposed to maximize their performance measure.
- Goals help organize behavior by limiting the objectives the the agent is trying to achieve.
- An agent with several immediate options of unknown value can decide what to do by first examining future actions that eventually lead to states of known value.
- *Search*: looking for a sequence of actions that reaches the goal.
- A problem can be defined by five components
    - *Initial state*: the starting state
    - *Actions*: what the agent can do
    - *Transition model*: a description of each action
    - *Goal test*: checks if a given state is the goal state
    - *Path cost*: the numerical cost of each path
- A solution is a sequence of actions that leads from the initial state to the goal state.
- An optimal solution is a sequence that has the lowest path cost among all solutions.
- *Abstraction*: the removal of detail from a representation.
- Intelligent agents use abstraction to retain validity while reducing complexity.
- A search tree has the initial state at the root, nodes that correspond to the state, and branches that correspond to the action.
- The essence of search is to exploit one option and putting the others aside until our choice doesn’t lead to a solution.
- There’s a trade-off between exploitation (depth first search) and exploration (breadth first search).
- *Frontier*: the edge of the search
- Search algorithms vary primarily in their search strategy.
- Algorithms that forget their history are doomed to repeat it.
- To avoid redundant paths, remember where one’s been.
- Evaluate an algorithms performance in four ways
    - *Completeness*: guaranteed to find a solution?
    - *Optimality*: is the solution the optimal solution?
    - *Time complexity*: how long will it take?
    - *Space complexity*: how much memory will it take?
- Apply this to the problem of AI where the goal is artificial general intelligence. There are certain paths that are more cost efficient and complete (the neuroscience path).
- *Uninformed/blind search*: strategies that have no additional information about states beyond.
- *Informed/heuristic* *search*: strategies that use problem-specific knowledge beyond the definition of the problem itself to aid in search.
- Examples of blind search.
- Breadth-first search
    - All nodes are expanded at a given depth before any nodes at the next level are expanded
    - Is complete
    - Sometimes optimal
    - Time complexity is exponential (the power is the depth of the tree)
    - Space complexity is exponential (the power is the depth of the tree)
    - The memory requirement are a bigger problem for BFS than the execution time
    - Exponential complexity search problems cannot be solved by blind search methods for any but the smallest of instances
- Uniform-cost search
    - Expands the node with the lowest path cost
    - Is complete
    - Is optimal
    - Time complexity can be worse than BFS
    - Space complexity can be worse than BFS
- Depth-first search
    - Always expands the deepest node in the current frontier
    - Is incomplete
    - Is suboptimal
    - Time complexity can be worse than BFS
    - Space complexity is better than BFS
- *Bidirectional search*: search from the initial state and from the goal in hopes that they will connect.
- I am dropping this textbook at section 3.5.1 because it doesn’t align with how I believe AI should be built. Being aware of the sunk cost fallacy, I am dropping it now even though I’ve already put in some work.

## Chapter 4: Beyond Classical Search

## Chapter 5: Adversarial Search

## Chapter 6: Constraint Satisfaction Problems

# Part III: Knowledge, reasoning, and planning

## Chapter 7: Logical Agents

## Chapter 8: First-Order Logic

## Chapter 9: Inference in First-Order Logic

## Chapter 10: Classical Planning

## Chapter 11: Planning and Acting in the Real World

## Chapter 12: Knowledge Representation

# Part IV: Uncertain knowledge and reasoning

## Chapter 13: Quantifying Uncertainty

## Chapter 14: Probabilistic Reasoning

## Chapter 15: Probabilistic Reasoning over Time

## Chapter 16: Making Simple Decisions

## Chapter 17: Making Complex Decisions

# Part V: Learning

## Chapter 18: Learning from Examples

## Chapter 19: Knowledge in Learning

## Chapter 20: Learning Probabilistic Models

## Chapter 21: Reinforcement Learning

# Part VI: Communicating, perceiving, and acting

## Chapter 22: Natural Language Processing

## Chapter 23: Natural Language for Communication

## Chapter 24: Perception

## Chapter 25: Robotics

# Part VII: Conclusions

## Chapter 26: Philosophical Foundations

## Chapter 27: AI: The Present and Future
