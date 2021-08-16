import React from "react";
import NewsCard from "./NewsCard";
import useStyles from "./GridStyles";

import { Grid, Grow} from "@material-ui/core";

function NewsCards({ articles }) {
  const classes = useStyles();

  // if(window.scrollX)
  
      return (
        <>
        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {articles.map((article, id) => (
              <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
                <NewsCard article={article} id={id} />
              </Grid>
            ))}
          </Grid>
        </Grow>
   
    </>);
  
}

export default NewsCards;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import NewsCard from "./NewsCard";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function NewsCards({ articles}) {
//   const classes = useStyles();

//   return (
//     <div>
//       <Grid container alignItems="stretch" spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>
//           {articles.map((article, id) => (
//             <Grid item xs={6} sm={6} md={4} lg={3} style={{display: 'flex'}}>
//             <NewsCard article={article} id={id}/>
//             </Grid>
//         ))}
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
