import { useState } from "react"
import { Container, Header, Menu, Segment} from "semantic-ui-react"
import { DisplayType } from "../home"
import { useQuery } from "@tanstack/react-query"
import { fetchRatedMovies, fetchRatedTvShows } from "./query"
import { ColumnDisplay } from "../home/column-display"
import { Navigate } from "react-router-dom"


export const Rated = () =>{

    const[activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies)
    
    
    const {data: ratedMovies, isLoading: isLoadingRatedMovies} = useQuery({       
        queryKey:["ratedMovies"], 
        queryFn: fetchRatedMovies
    });

    const {data: ratedTvShows, isLoading: isLoadingRatedTvShows} = useQuery({
        queryKey:["ratedTvShows"], 
        queryFn: fetchRatedTvShows
    });

    if(localStorage.getItem("guest_session_id") === null){
        return <Navigate to={"/auth"}/>
    }
    
    return (        
    <Container style={{marginTop:50}}>
        <Menu pointing secondary>
            <Menu.Item name="Movies" active={activeTabs === DisplayType.Movies}
             onClick={() => setActiveTabs(DisplayType.Movies)}
             />
            <Menu.Item name="Tv Shows" active={activeTabs === DisplayType.TvShows}
             onClick={() => setActiveTabs(DisplayType.TvShows)}
            />
        </Menu>
        <Segment>
        {activeTabs === DisplayType.Movies && ratedMovies ? (
        <div>
          <Header as={"h2"}>Rated Movies</Header>
          {isLoadingRatedMovies?(<p>Loading</p>) :
         ratedMovies?.results?(
             <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies} isRated/>
          ) : (
            <h2>No rated movies available</h2>
          )    
        }
       
        </div>
        )
        : (
        <div>
            <Header as={"h2"}>Rated Tv Shows</Header>
            {isLoadingRatedTvShows? (<p>Loading...</p>
            ) : ratedTvShows?.results?(
              <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TvShows} isRated/>
            ) : (
                <h2>No rated Tv Show available</h2>
            )
        }
        </div>
        )}
        </Segment>
    </Container>
    )
}