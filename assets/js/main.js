document.getElementById("data-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
   
     try {
      const response = await fetch("https://main.tcsales.pt/api/bbh/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      const result = await response;
      console.log("Resultados");
      console.log(result);
      if(result.status == 200){
        alert("Dados enviados com sucesso!");
        
      }else{
        alert("Dados errados!");
      }
      
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar os dados.");
    } 
  });
