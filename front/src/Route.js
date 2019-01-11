

const Router = (props) => (
    <HashRouter>
      <div>
        <Route exact path="/" render={() => <list data={props.data}/>}/>
      </div>
    </HashRouter>  
)