
import {Grid,Header,Form, Segment, Button} from "semantic-ui-react";
import {useMutation} from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import {useNavigate} from "react-router-dom";


export const Auth = () =>{
   
    const {mutate} = useMutation({mutationKey: ["login"], 
        mutationFn: mutationLogin,
        onSuccess: (data)=>{
            if(data?.guest_session_id){
            localStorage.setItem("guest_session_id", data.guest_session_id)
            }
            else{
            console.error("Login succeded but did not expected data.")
            }
        },
        onError: (e) =>{
        console.error("Login failed: ", e)
        }  
    })

    const navigate = useNavigate();
   // const [isLoading, setIsLoading] = useState(false) 

    const handleLogin = async() =>{
       
       await mutate(); 
       setTimeout(() =>navigate("/"), 1000 )
       
    };

   return(
    <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
        <Grid.Column style={{maxWidth:450}}>
           
           <Header as="h2" color="violet" textAlign="center">
             Welcome! Login by registering as a Guest User.
           </Header> 
              
           <Form size="large">
                <Segment stacked>
            
                    <Button color="violet" size="large" fluid onClick={handleLogin}>
                        Login
                    </Button>
                </Segment>
           </Form>

        </Grid.Column> 
    </Grid>
   )
};