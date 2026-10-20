---
title: "Recherche"
description: "Cône d’entropie holographique, gravité quantique et information quantique. Recherche de Rémi Seddigh au QMAP, UC Davis."
blurb: "Mes axes de recherche : la gravité quantique et le cône d’entropie holographique."
---

## Axes de recherche

Je travaille sur la gravité quantique, c’est-à-dire sur la réconciliation des
lois de la mécanique quantique avec celles de la relativité générale. La voie la
plus prometteuse dont nous disposions est la
[correspondance AdS/CFT](https://arxiv.org/abs/hep-th/9905111), découverte par
[Maldacena](https://arxiv.org/abs/hep-th/9711200). Elle affirme qu’un certain
type de théorie quantique des champs sans gravité, une
théorie conforme des champs (*conformal field theory*) ou CFT, peut se
comprendre comme une théorie de la gravité quantique en une dimension de plus,
dans un espace-temps à courbure hyperbolique appelé espace anti-de Sitter, ou
AdS. On se représente d’ordinaire la CFT comme vivant « sur le bord »
(*boundary*) de l’espace-temps AdS, ce qui mène au principe holographique : tout ce qui est stocké dans la théorie
gravitationnelle du « volume » (*bulk*) est en fait encodé dans les corrélations
quantiques de la théorie des champs du bord.

{{< fig src="ads-cylinder.png" alt="Un cylindre représentant l’espace-temps anti-de Sitter. Sur son bord, une tranche à temps constant où la sous-région A est marquée en rouge et son complément en vert ; une surface ancrée aux deux extrémités de A plonge vers l’intérieur." caption="Le dispositif holographique. La théorie du bord vit sur la surface du cylindre ; la sous-région *A* et son complément *A<sup>c</sup>* se rejoignent à la surface d’intrication ∂*A*, et l’entropie de *A* est l’aire d’une surface intérieure ancrée là." >}}

En 2006, [Ryu et Takayanagi](https://arxiv.org/abs/hep-th/0603001) ont proposé
que, dans cette correspondance, l’entropie d’intrication (*entanglement
entropy*) de la matrice densité réduite (*reduced density matrix*) sur une
sous-région de la CFT du bord d’un espace-temps statique est égale à l’aire
d’une surface minimale dans le volume, ancrée à la frontière
de cette sous-région, divisée par $4G_N$. Un an plus tard, [Hubeny, Rangamani et
Takayanagi](https://arxiv.org/abs/0705.0016) ont étendu cette proposition aux
espaces-temps dépendant du temps, où la surface minimale devient une
surface extrémale (*extremal surface*). L’entropie d’intrication sur le bord est
donc une quantité géométrique dans le volume : connaître les corrélations
quantiques entre sous-régions du bord nous renseigne sur la structure de
l’espace-temps, et connaître l’espace-temps nous renseigne sur les corrélations.

Du fait de ce dictionnaire, les contraintes sur les entropies
d’intrication sont des contraintes sur l’espace-temps lui-même. Tout état de la
CFT correspondant à une géométrie classique et lisse dans le volume doit
satisfaire un ensemble d’inégalités d’entropie holographique (*holographic
entropy inequalities*), et pour *N* sous-régions disjointes, l’intersection
de ces inégalités découpe dans l’espace $(2^N-1)$-dimensionnel des entropies de
sous-régions une région appelée
[cône d’entropie holographique](https://arxiv.org/abs/1505.07839) (*holographic
entropy cone*), ou HEC. Bao et ses collaborateurs ont montré que les vecteurs
d’entropie situés à l’intérieur du cône peuvent être réalisés par des modèles de
graphes holographiques : un graphe avec un sommet
« de bord » par sous-région de la CFT, des sommets « de volume » représentant
une partition de l’espace-temps du volume, et des arêtes pondérées par l’aire de
la surface extrémale que partagent les deux régions voisines. L’entropie d’un
sous-système est alors le poids de la coupe minimale (*minimum cut*) du graphe
qui sépare ce sous-système du reste.

{{< fig src="graph-on-bulk.png" alt="Une tranche à temps constant du volume, en demi-disque, découpée en cellules par des surfaces RT emboîtées au-dessus des régions de bord A, B, O et C, avec un graphe pondéré tracé par-dessus : un sommet par cellule, des arêtes traversant les surfaces RT qui séparent les cellules, pondérées par l’aire de la portion de surface." caption="Construire le graphe à partir de la géométrie : les surfaces RT découpent la tranche du volume en cellules, chaque cellule devient un sommet, chaque surface partagée entre deux cellules une arête, et le poids d’une arête est l’aire de la surface correspondante en unités de 4*G*<sub>N</sub>." >}}

Cette abstraction se révèle puissante, puisque les modèles de graphes peuvent
être étudiés pour eux-mêmes, à l’aide de la littérature existante en théorie des
graphes. Un graphe et une coupe minimale sont des objets combinatoires, et une
fois le cône d’entropie holographique reformulé dans ces termes, plus rien du
reste de la machinerie holographique, ni CFT, ni lagrangien, ni relativité
générale, ni théorie des cordes, n’est nécessaire. Les inégalités d’entropie,
qui encodent l’information sur l’intrication de la CFT du bord et donc sur la
géométrie du volume, deviennent des comparaisons (relativement) simples entre
les coûts de différentes coupes d’un graphe. Étudier ces inégalités avec cet
outillage pourrait aussi aider à répondre à des questions de théorie de
l’information quantique qui n’ont rien à voir avec la gravité. L’une d’elles est
le [problème d’indépendance marginale quantique](https://arxiv.org/abs/1912.01041)
(*quantum marginal independence problem*) : étant donné un ensemble de
sous-systèmes, quels schémas d’indépendance entre leurs marginales,
ou matrices densité réduites, un état quantique peut-il réellement présenter ?
Grâce à cette simplification combinatoire, des outils conçus pour répondre à
des questions sur le HEC et l’holographie se révèlent généralisables à la
théorie de l’information quantique, et même classique (voir par exemple
l’[hypergraphe de corrélation](https://arxiv.org/abs/2412.18018)).

{{< fig src="graph-cut-a.png" alt="Un graphe en arbre avec les sommets de bord A, B, C et O et deux sommets internes, aux arêtes pondérées ; une courbe coupe l’unique arête de poids 1 qui touche A." caption="L’entropie d’un sous-système est le coût de la coupe la moins chère qui le sépare du reste. Ici la coupe minimale pour *A* traverse une seule arête de poids 1, donc *S<sub>A</sub>* = 1. En faisant de même pour tous les sous-systèmes on obtient le vecteur d’entropie du graphe." >}}

En ce moment, ma directrice de thèse, la professeure Veronika Hubeny, et moi
étudions comment les entropies d’un graphe varient avec les poids de ses arêtes.
[Hernández-Cuenca, Hubeny et Rota](https://arxiv.org/abs/2204.00075) ont défini
une *W-cell* comme une région de l’espace des poids d’arêtes sur laquelle la
structure de coupe minimale d’une topologie de graphe fixée reste inchangée.
Sous l’application qui envoie un vecteur de poids sur le vecteur d’entropie que
définissent ses coupes, chaque W-cell a une image dans l’espace des entropies,
une *S-cell*. Nous établissons l’ensemble complet des W-cells et des S-cells
pour une topologie de graphe donnée : la décomposition en S-cells montre
quelles faces du HEC une certaine topologie peut encoder, et où chercher de nouvelles inégalités
d’entropie holographique et de nouveaux rayons extrêmes.


## Articles en préparation

**W-Complexes, S-Complexes, and the KC Lattice.** Avec Veronika Hubeny et
Massimiliano Rota.
