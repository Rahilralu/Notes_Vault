export const  handleLoginSuccess = async(email,password,setCurrentPage,type) => {
  console.log("TYPE:",type);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email:email,
      password:password,
      type:type
    })  
  });

  const data = await res.json();

  if(data.success){
      setCurrentPage('dashboard');
  }
}