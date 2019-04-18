# ZSSN (Zombie Survival Social Network)

## Descrição do Problema

O mundo finalmente atingiu o seu estado apocalíptico, onde uma pandemia causada por um virus de laboratório transforma seres humanos e animais em zumbis, seres sedentos por carne.

Você, como membro da resistência (e último sobrevivente com conhecimentos em desenvolvimento de software) foi incubido à desenvolver um sistema para compartilhamento de recursos entre os humanos não infectados.

## Funcionalidades

O sistema consiste em uma **_API REST_**, que irá armazenar informações sobre os sobreviventes, bem como os recursos que cada um detem.

Para isso, o sistema deverá contar com as seguintes funcionalidades:

- **Cadastrar usuários na base**:

  Um usuário é definido basicamente por seu _nome_, _idade_, _sexo_ e _última localização (latitude, longitude)_.

  Ao ser criado, um usuário irá conter um inventário de itens que o mesmo detem (inicialmente vazio).

  Os itens aceitos são: **água**, **comida**, **medicamento** e **munição**.

- **Atualizar localização de usuário**:

  Um usuário deve ser capaz de atualizar sua última localização, informando a nova latitude/longitude.

- **Marcar usuário como infectado**:

  Em uma situação caótica como essa, é inevitável que um usuário do sistema venha a ser contaminado.

  Nesse caso, o mesmo deve ser atualizado no sistema como infectado.

  Um usuário infectado não pode realizar escambo, não pode manipular seu inventário nem ser listado nos relatórios (para fins práticos, o mesmo está inativo).

  **Um usuário é considerado infectado quando ao menos 3 outros usuários distintos do sistema reportaram sua contaminação**.

  Ao ser infectado, todos os itens do inventário do usuário ficam **inacessíveis**.

- **Adicionar/Remover itens do inventário de um usuário**:

  Um usuário poderá adicionar/remover itens de seu inventário.

  Os possíveis itens estão descritos na primeira opção acima;

- **Escambo de bens**:

  Usuários do sistema podem trocar bens entre si.

  Para isso, a tabela de equivalência abaixo será utilizada.

  Todos os escambos devem conter saldo final zero, ou seja, os dois usuários devem negociar a mesma quantidade de pontos.

  Não é necessário realizar o registro do escambo, apenas transferir os itens entre os dois usuários.

| Item      | Pontos   |
| --------- | -------- |
| 1 Água    | 4 pontos |
| 1 Comida  | 3 pontos |
| 1 Remédio | 2 pontos |
| 1 Munição | 1 ponto  |

- **Relatórios**:

  Para fins de consulta, os seguintes relatórios devem estar disponíveis no sistema:

  1. Porcentagem de usuários infectados;
  2. Porcentagem de usuários não-infectados;
  3. Quantidade média de cada tipo de item por usuário (águas/usuário, comidas/usuário, etc);
  4. Número de pontos perdidos por usuários infectados;

## Orientações técnicas:

1. Utilize a linguagem e framework de sua preferência;
2. Utilize um banco de dados relacional (PostgreSql, MySql, etc);
3. Sistema REST, respondendo aos verbos HTTP (POST, GET, UPDATE, etc). A definição das rotas e verbos utilizados fica a seu critério, entretanto procure manter os _standards_ e _best practices_;
4. Toda a comunicação é feita via JSON;
5. Não é necessário autenticação (afinal, quem vai perder tempo hackeando o sistema com um bando de zumbis na cola?! :P );
6. Como o número de sobreviventes é baixo, o tráfego no sistema não será alto;

## Dicas:

1. **Documente** todo o seu sistema, desde como fazer o _setup_ e rodar os testes, até as rotas criadas, exemplos de chamadas à _API_ e as decisões arquiteturais;
2. **Testes, testes e testes!** Num apocalipse zumbi, ninguém tem tempo a perder fazendo testes manuais, então automatize ao máximo sua suite;
3. **Utilize Git**, com commits pequenos e bem descritos (nada de um commit único com todo o código);
