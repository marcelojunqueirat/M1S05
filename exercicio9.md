# [M1S05] Ex 9 - Conceito do GitFlow

> Explique com suas palavras, o conceito do GitFlow e como ele é utilizado no controle de versão de um projeto.

## GitFlow é um padrão de fluxo de trabalho, para controle de versão do git. Ele possui uma gama de convenções e diretrizes para melhor organização das branches, no que facilita no gerenciamento do processo de desenvolvimento e entrega de software.
## O sistema em que o GitFlow opera, tem como base duas branches PRINCIPAIS: a master(main) e a develop. A branch master é onde centraliza o código fonte estável, é o que está rodando em produção. A branch develop é uma cópia da master(main) e é partir dessa branch que os desenvolvedores realizarão novas entregas, correções, melhorias e novas implementações.
## Além das branches principais, o fluxo trabalha com as braches: 
## Feature: Clonada a partir da develop e usada para novas implementações(funcionalidades).
## Hotfix: Clonada a partir da master e usada para corrigir problemas urgentes (apagar incendio).
## Release: Clonada a partir da develop e usada para preparar versões para lançamentos.

## Vale ressaltar que esse é o modelo básico padrão; muitas empresas o usam e o adaptam com suas necessidades para atender sua realidade. Então é comum ver empresas com mais fluxos, ou processos do que a base do GitFlow.
