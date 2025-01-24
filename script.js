const URL="https://alexwohlbruck.github.io/cat-facts/docs/";

const getFacts = async () => {
    console.log("Getting fetching data...");
   let response = await fetch(URL);
   console.log(response);
 let Data = await response.json();
 console.log(Data);
};