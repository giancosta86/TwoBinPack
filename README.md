# TwoBinPack

*Scala architecture for two-dimensional packing*


## Introduction

**Operations Research** is the *science and art* of solving practical - often very difficult - problems with mathematical *elegance*, *minimalism* and *efficiency*.

**Two-dimensional packing** consists of paramount, well-known classes of problems that can arise *in a wide variety of contexts* - from warehouse stocking to cargo loading, or wood craftsmanship and page layouts, ...

For example:

* how can we dispose *a set of products in a box* to include as many items as possible? (*Knapsack* problem)

* how can we dispose *items on an endless ribbon* in order to employ the shortest possible string? (*Strip* problem)


**TwoBinPack** is a comprehensive *Scala architecture*, employing **hybrid OOP-FP techniques**, designed to *interactively tackle* the above problems and study - via dedicated, extensible *analytics tool* - how they are usually solved by people, therefore enabling both practical solving and long-term statistical analysis, to gather further insight on the topic.

Last but not least, it is **my MSc project in Computer Engineering**! :mortar_board::ghost::mortar_board:

For further information, please consult the sections below or visit [its website](http://gianlucacosta.info/TwoBinPack).


## Components

![Architecture](images/architecture.png)

TwoBinPack consists of **3 components**:

* [TwoBinGame](https://github.com/giancosta86/TwoBinGame): a simple and intuitive ScalaFX app for *interactively solving* two-dimensional packing problem instances - both *Knapsack* and *Strip*

* [TwoBinManager](https://github.com/giancosta86/TwoBinManager): a ScalaFX app enabling users (especially *teachers* and *researchers*) to

  * create, edit, view, import and export *problem instances*

  * import, export and view *solutions*

  * consult *charts* produced by the **analytics engine**

  TwoBinManager features an extensible kernel, supporting *custom Scala plugins*.

* [TwoBinKernel](https://github.com/giancosta86/TwoBinKernel): the Scala library at the heart of the other components; it simplifies the creation of *plugins for TwoBinManager* and can even be referenced *by other architectures* - provided they comply with its license

TwoBinPack is based on **4 modules** of the [Helios](https://www.facebook.com/Helios-206962992779275/) open source library - namely:

* [Helios-core](https://github.com/giancosta86/Helios-core)

* [Helios-fx](https://github.com/giancosta86/Helios-fx)

* [Helios-jpa](https://github.com/giancosta86/Helios-jpa)

* [Helios-reflection](https://github.com/giancosta86/Helios-reflection)


## Core concepts

* **Problem** is an instance of a two-dimensional packing problem. Its main attribute is a **FrameTemplate** - defining frame parameters. It also has a unique *name* and a unique *id*, as well as on optional time limit

* **Frame** is the working area where users can play with blocks to discover solutions. It is created using a **FrameTemplate** - which states, for example, the initial size of the frame and the **FrameMode** (which can be *Knapsack* - for a static frame, or *Strip* - for an endless ribbon)

* **Solution** is a solution to a given problem, consisting in a set of **AnchoredBlock** instances and the (optional) nickname of the user that created the solution

* **ProblemBundle** (*.tbprob* extension) is an XML file containing the declaration of a list of problem instances. It can be used:

  * to start a game in *TwoBinGame*

  * to exchange problems between users of TwoBinManager

* **Solution CSV file** (*.tbsol* extension) is a CSV file containing one or more solutions. It can be created:

  * by *TwoBinGame*, at the end of a game

  * by *TwoBinManager*, when exporting all the solutions related to a problem - for example, to send them to another user

* **Standard problem** (*.txt* extension) is a plain text file describing a problem using a standard format - which is used, for example, at the [Operations Research Group](http://or.dei.unibo.it/) at the University of Bologna.


Further documents can be easily supported by creating custom importers for TwoBinManager, using the SDK provided by TwoBinKernel.


## Object-oriented and Functional programming

TwoBinPack leverages the **Scala programming language** and its *hybrid nature*, which brilliantly blends **Object-oriented programming** (OOP) and **Functional Programming** (FP) concepts - especially:

* Collection pipelines

* Immutability and case classes

* Tail recursion optimization

* Minimalist syntax

Such an *outstanding language* can enable *a smooth transition* from traditional OOP to a more modern, fluent and even robust **FP architecture** without losing *previous investments*.


## License and technologies

TwoBinPack is open source - released under the [GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html) - and employs several modern open technologies:

* [Scala](http://www.scala-lang.org/)

* [ScalaFX](http://www.scalafx.org/)

* [Hibernate](http://hibernate.org/)

* [XStream](http://x-stream.github.io/)

* [Helios](https://www.facebook.com/Helios-206962992779275)

* [Aurora](https://github.com/giancosta86/Aurora)

* [MoonDeploy](http://gianlucacosta.info/moondeploy/)

* [Gradle](https://gradle.org/)

* [MoonLicense](https://github.com/giancosta86/MoonLicense)

* [Reflections](https://github.com/ronmamo/reflections)


## Special thanks

Special thanks, for their valuable advice and suggestions, to:

* [Professor Silvano Martello](http://www.or.deis.unibo.it/staff_pages/martello/cvitae.html)

* [Professor Manuel Iori](http://personale.unimore.it/rubrica/dettaglio/iorim)

* [Professor Enrico Malaguti](http://or.dei.unibo.it/staff/enrico-malaguti)

* [Dr. Maxence Delorme](http://or.dei.unibo.it/staff/maxence-delorme)



## Further references

* [TwoBinPack - Facebook page](https://www.facebook.com/TwoBinPack-234021307010796)
