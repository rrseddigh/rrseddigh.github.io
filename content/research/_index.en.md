---
title: "Research"
description: "Holographic entropy cone, quantum gravity and quantum information. Research by Remi Seddigh at QMAP, UC Davis."
blurb: "My research interests: quantum gravity and the holographic entropy cone."
---

## Research Interests

I work on quantum gravity, the reconciliation of the laws of quantum
mechanics with those of general relativity. The most promising route we have is
the [AdS/CFT correspondence](https://arxiv.org/abs/hep-th/9905111), discovered
by [Maldacena](https://arxiv.org/abs/hep-th/9711200). It states that a
particular kind of quantum field theory with no gravity in it, a *conformal*
field theory or CFT, can be understood as a theory of quantum gravity in one
higher dimension, in a hyperbolically curved spacetime called anti-de Sitter,
or AdS, space. The CFT is usually
pictured as living "on the boundary" of the AdS spacetime, which leads to the
holographic principle: everything stored in the "bulk" gravitational theory is
in fact encoded in the quantum correlations of the "boundary" field theory.

{{< fig src="ads-cylinder.png" alt="A cylinder representing anti-de Sitter spacetime. Its boundary carries a constant-time slice on which a subregion A is marked in red and its complement in green; a surface anchored to the two endpoints of A reaches into the interior." caption="The holographic setup. The boundary theory lives on the surface of the cylinder; the subregion *A* and its complement *A<sup>c</sup>* meet at the entangling surface ∂*A*, and the entropy of *A* is the area of a surface in the interior anchored there." >}}

In 2006, [Ryu and Takayanagi](https://arxiv.org/abs/hep-th/0603001) proposed that
within this correspondence, the entanglement entropy of the reduced density
matrix on a subregion of the boundary CFT of a static spacetime equals the area
of a minimal surface in the bulk, anchored to the edges of that subregion, divided by $4G_N$. A
year later, [Hubeny, Rangamani and
Takayanagi](https://arxiv.org/abs/0705.0016) generalized this to time-dependent
spacetimes, where the minimal surface becomes an extremal one. Entanglement
entropy on the boundary is therefore a geometric quantity in the bulk: knowing
the quantum correlations among boundary subregions tells us about the structure
of the spacetime, and knowing the spacetime tells us about the correlations.

Because of that dictionary, the constraints on entanglement entropies are
constraints on spacetime itself. Any CFT
state that corresponds to a smooth classical bulk geometry has to obey a set of
holographic entropy inequalities, and for *N* disjoint subregions the
intersection of those inequalities carves out a region in the $(2^N-1)$-dimensional space of
subregion entropies called the [holographic entropy
cone](https://arxiv.org/abs/1505.07839), or HEC. Bao et al. showed that the entropy vectors inside the cone can be realized by
holographic graph models: a graph with one "boundary" vertex per CFT subregion,
"bulk" vertices standing for a partition of the bulk spacetime, and edges
weighted by the area of the extremal surface that the two adjacent regions
share. The entropy of a subsystem is then the weight of the minimum cut in the
graph separating that subsystem from the rest.

{{< fig src="graph-on-bulk.png" alt="A constant-time slice of the bulk drawn as a half-disc, cut into cells by nested semicircular RT surfaces over the boundary regions A, B, O and C, with a weighted graph drawn on top: one vertex per cell, edges crossing the RT surfaces that separate the cells, weighted by the area of the surface portion." caption="Building the graph from the geometry:  RT surfaces cut the bulk slice into cells, each cell becomes a vertex, each shared surface between cells an edge, and an edge weight is the area of the corresponding surface in units of 4*G*<sub>N</sub>." >}}

This abstraction turns out to be powerful, since the graph models can be studied on their
own using the existing graph theory literature. A graph and a minimum cut are combinatorial objects, and once the holographic entropy cone has been recast in these terms, none of the rest of the holographic machinery—CFTs, Lagrangians, general relativity, string theory—is
necessary. Entropy inequalities, which encode entanglement information about the boundary CFT and therefore the bulk geometry, become (relatively) simple comparisons between costs of different cuts of graphs. Studying these inequalities with this machinery could also help answer questions in quantum information theory that have
nothing to do with gravity. One of them is the [quantum marginal independence problem](https://arxiv.org/abs/1912.01041): given a collection of subsystems,
which patterns of independence among their marginals (or reduced density matrices) can a quantum state
actually have? Because of this combinatorial simplification, tools that were created to answer questions about the HEC and holography turn out to be generalizable to quantum and even classical information theory (see e.g. the [correlation hypergraph](https://arxiv.org/abs/2412.18018)).

{{< fig src="graph-cut-a.png" alt="A tree graph with boundary vertices A, B, C and O and two internal vertices, its edges labeled with weights; a curve cuts the single edge of weight 1 that meets A." caption="The entropy of a subsystem is the cost of the cheapest cut separating it from the rest. Here the minimum cut for *A* crosses a single edge of weight 1, so *S<sub>A</sub>* = 1. Doing this for all subsystems gives the entropy vector of the graph." >}}

At the moment my advisor, Prof. Veronika Hubeny, and I are studying how a
graph's entropies change as its edge weights vary.
[Hernández-Cuenca, Hubeny and Rota](https://arxiv.org/abs/2204.00075) defined a
*W-cell* as a region of edge-weight space on which the minimum
cut structure of a fixed graph topology stays the same. Under the map that
sends a weight vector to the entropy vector its cuts define, each W-cell has an
image in entropy space, an *S-cell*. We are working out the full set of W-cells
and S-cells for a given graph topology: the S-cell decomposition shows which faces of
the HEC a certain topology can encode, and where we can look for new holographic entropy inequalities and extreme rays. 


## Papers in preparation

**W-Complexes, S-Complexes, and the KC Lattice.** With Veronika Hubeny and
Massimiliano Rota.
