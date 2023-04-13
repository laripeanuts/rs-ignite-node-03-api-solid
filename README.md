# Gym pass style app

## RFs Requisitos Funcionais

- [ ] Deve poder se cadastrar na aplicação;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil do usuário logado;
- [ ] Deve ser possível o usuário obter o número de vezes que fiz check-in;
- [ ] Deve ser possível o usuário obter histórico de check-ins;
- [ ] Deve ser possível buscar academias próximas;
- [ ] Deve ser possível buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar o check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNFs Requisitos Não Funcionais

- [ ] A senha do usuário deve estar criptografada;
- [ ] Os dados da aplicação devem estar persistido em um banco de dados PostgreSQL;
- [ ] Toda lista de dados deve ser paginada com 20 itens por página;
- [ ] O usuário deve ser identificado pelo token JWT;

## RNs Regras de negócio

- [ ] O usuário não pode se cadastrar com um e-mail já existente;
- [ ] O usuário não pode fazer check-in no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto da academia (distância máxima de 100m);
- [ ] O usuário não pode fazer check-in em uma academia que não existe;
- [ ] O usuário não pode fazer check-in em uma academia que não está aberta;
- [ ] O check-in só pode ser validado após 20min de ser criado;
- [ ] O check-in só pode ser validado por um usuário administrador;
- [ ] A academia só pode ser cadastrada por administradores;