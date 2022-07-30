//This file/component is for the apps navigation links
//This is a stateless component - meaning it can only use the data that is passed to it via props.

//the nav links or browsers forward/back buttons should show the correct URL in bar


const Nav = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
  
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/photo" render={() => <Photo title='PHoto'/> } />
          <Route exact path="/photo" component={Photos}/>
          <Route path="/photo/:type/:name" component={Featured}/>
          <Route component={NotFound} />
        </Switch> 
      </div>
    </BrowserRouter>
  );