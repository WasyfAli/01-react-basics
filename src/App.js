import React from 'react';
import logo from './logo.svg';
import './App.css';
import Subscribe from './components/Subscribe'
import Counter from './components/Counter'
import FunctionalClickEvent from './components/FunctionalClickEvent'
import ClassClickEvent from './components/ClassClickEvent'
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import StyleSheet from './components/StyleSheet'
import InlineStyle from './components/InlineStyle';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Fragments from './components/Fragments';
import FragmentsTable from './components/FragmentsTable';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInputRefs from './components/FocusInputRefs';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import HeroErrBound from './components/HeroErrBound';
import ErrBoundary from './components/ErrBoundary';
import HOCclickCounter from './components/HOCclickCounter';
import HOChoverCounter from './components/HOChoverCounter';
import RenderPropClickCounter from './components/RenderPropClickCounter';
import RenderPropHoverCounter from './components/RenderPropHoverCounter';
import RenderPropCounter from './components/RenderPropCounter';
 
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <StyleSheet primary={true}/>
      <InlineStyle />
      <ParentComponent />
      <FunctionalClickEvent />
      <ClassClickEvent />
      <Subscribe />
      <FocusInputRefs />
      <FRParent />
      <RefsDemo />
        <img src={logo} className="App-logo" alt="logo" />
        <ConditionalRendering />
        <EventBinding />
      <Counter />
      <ListRendering />
      <LifeCycleA />
      <Form />
      <Fragments />
      <FragmentsTable />
      <ParentComp />
      <div>Implementation of error boundary</div>
      <ErrBoundary><HeroErrBound heroname="superman" /></ErrBoundary>
      <ErrBoundary><HeroErrBound heroname="batman" /></ErrBoundary>
      <ErrBoundary><HeroErrBound heroname="Make it joker for error" /></ErrBoundary> 
      <HOCclickCounter name='HOC'/>
      <HOChoverCounter name='HOC'/>
      <RenderPropCounter render={(count, incrementCount) => (<RenderPropClickCounter count={count} incrementCount={incrementCount}/> )} />
      <RenderPropCounter render={(count, incrementCount) => (<RenderPropHoverCounter count={count} incrementCount={incrementCount}/> )} />
      <PortalDemo />
      
      
                
      </header>
    </div>
  );
}

export default App;
