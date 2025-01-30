import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
import { ThemeProvider } from "./Context";
const AppHook = React.lazy(() => import('./AppHook'));
const UserForm = React.lazy(() => import('./UserForm'));
const Login = React.lazy(() => import("./Login"));

// class App1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <ThemeProvider>
//         <div className="App" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
//           <Header />
//           <Suspense fallback={<div>Loading Page...</div>}>
//             <Login />
//           </Suspense>
//           <Suspense fallback={<div>Loading Page...</div>}>
//             <UserForm />
//           </Suspense>
//           {/* <div>
//             <button onClick={this.increment.bind(this)}>
//               Click {this.state.count} times
//             </button>
//           </div> */}
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

function App() {
  return (
    <ThemeProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/apphook" element={<AppHook />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Router>
      </div>
      {/* <div className="App" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
        <Header />
        <Suspense fallback={<div>Loading Page...</div>}>
          <Login />
        </Suspense>
        <Suspense fallback={<div>Loading Page...</div>}>
          <UserForm />
        </Suspense>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
