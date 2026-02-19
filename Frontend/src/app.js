export const  handleLoginSuccess = async(email,password,setCurrentPage) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email:`${email}`,
      password:`${password}`
    })  
  });

  const data = await res.json();

  if(data.success){
      setCurrentPage('dashboard');
  }
}