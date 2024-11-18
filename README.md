# e-Ticket: Sistema de Compras de Ingressos

Bem-vindo ao **e-Ticket**, um sistema simples, eficiente e elegante para realizar a compra de ingressos online. Esta aplicação foi projetada com uma interface amigável, validações robustas e um design moderno, garantindo uma ótima experiência tanto para usuários quanto para administradores.

---

## 🎯 Funcionalidades

- **Seleção de Tipo de Ingresso:**  
  Escolha entre **Pista**, **Cadeira Superior** e **Cadeira Inferior** no menu suspenso.

- **Definição de Quantidade:**  
  Insira a quantidade desejada de ingressos (mínimo de 1, máximo de 10 por vez).

- **Compra Simples e Direta:**  
  Validações garantem que apenas quantidades válidas e disponíveis sejam processadas.

- **Atualização em Tempo Real:**  
  O sistema atualiza automaticamente o número de ingressos disponíveis após cada compra.

- **Feedback ao Usuário:**  
  Alertas claros informam se o tipo de ingresso ou a quantidade são inválidos, além de mensagens de sucesso ao finalizar a compra.

- **Design Responsivo e Moderno:**  
  Interface otimizada com fontes estilizadas, cores vibrantes e animações discretas.

---

## 🛠️ Tecnologias Utilizadas

1. **HTML:**  
   Estrutura da aplicação, com elementos organizados semanticamente.

2. **CSS:**  
   Design moderno e profissional, utilizando gradientes, fontes personalizadas e bordas estilizadas.

3. **JavaScript:**  
   Lógica de compra, validações e atualização dinâmica dos ingressos.

---

## 🌟 Destaques Visuais

### Cabeçalho
- Logotipo centralizado para reforçar a identidade visual.

### Formulário de Compra
- Menu suspenso para seleção do tipo de ingresso.  
- Campo de entrada para quantidade, com validação automática.

### Estoque de Ingressos
- Listagem visual do número disponível de cada tipo de ingresso, com cores que destacam os números.

### Mensagens Interativas
- Feedback visual imediato para erros e sucesso, como:  
  - `Por favor, insira uma quantidade válida (pelo menos 1).`  
  - `Compra realizada com sucesso.`  

---

## 📝 Código Explicado

### **HTML**
- Estrutura com cabeçalho, formulário e seção de listagem dos ingressos.  
- O formulário inclui elementos `select` e `input` para interação.  

### **CSS**
- Gradiente de fundo cria um visual imersivo.  
- Estilização personalizada para botões e campos, incluindo fontes da **Google Fonts**.  

### **JavaScript**
- Validação de dados no frontend para evitar erros.  
- Manipulação de DOM para atualizar os ingressos restantes.  
- Uso de funções reutilizáveis, como `verificarQuantidade` e `limparCampos`.  

---

## 🚀 Como Usar

1. **Escolha o Tipo de Ingresso:**  
   No menu suspenso, selecione a área desejada (Pista, Cadeira Superior ou Inferior).  

2. **Defina a Quantidade:**  
   Insira a quantidade desejada no campo apropriado (mínimo 1, máximo 10).  

3. **Clique em "Comprar":**  
   A aplicação valida os dados, atualiza o estoque e exibe mensagens de feedback.  

4. **Verifique o Estoque:**  
   A listagem de ingressos disponíveis é atualizada automaticamente.  

---

## 📂 Estrutura do Projeto

```plaintext
e-Ticket/
│
├── index.html         # Estrutura principal da aplicação
├── styles/
│   ├── _reset.css     # Estilos padrão resetados
│   ├── style.css      # Estilo principal da aplicação
├── js/
│   └── app.js         # Lógica da aplicação
├── assets/
│   ├── PNG/           # Imagens em PNG
│   ├── SVG/           # Ícones e gráficos em SVG
└── README.md          # Documentação do projeto
