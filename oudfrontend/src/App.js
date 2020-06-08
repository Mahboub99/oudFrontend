import React, { Component } from "react";
import Playlist from "./components/Playlist/playlist";
import LikedSongs from "./components/likedSongs/likedSongs";
import CreateAlbum from "./components/CreateAlbum/CreateAlbum";
import Album from "./components/album/album";
import Search from "./pages/Search/Search";
import Account from "./pages/Account/Account";
import RedirectPage from "./components/Account/General/RedirectPage";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import SeeAll from "./components/SeeAll/SeeAll";
import Download from "./pages/RoutingPages/download";
import Help from "./pages/RoutingPages/help";
import Premium from "./pages/RoutingPages/premium";
import Overview from "./pages/RoutingPages/OverView";
import SignUp from "./pages/Signup/index";
import SignIn from "./pages/Login/loginPage";
import ForgotPassword from "./components/Login&Signup/ForgetPassword/ForgotPassword";
import ResetPassword from "./components/Login&Signup/ForgetPassword/resetPassword";
import Entered from "./components/Login&Signup/logined/entered";
import Islinked from "./components/Login&Signup/linkisSent";
import Welcome from "./pages/Welcome/welcome";
import SuggestedArtist from "./pages/SuggestedArtistPage/SuggestedArtist";
import "./App.css";
import SeeAllRecentSearches from "./components/SeeAllRecentSearches/SeeAllRecentSearches";
import WhyGoPremium from "./components/Premium/WhyGoPremium/WhyGoPremium";
import WebPlayer from "./components/WebPlayer/WebPlayer";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
import Artist from "./pages/Artist/Artist";
import { base } from "./config/environment";
import SongInfo from "./components/SongInfo/SongInfo";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
const webPlayer = React.createRef();
class App extends Component {
  constructor() {
    super();
    // this.webPlayer = React.createRef();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home webPlayer={webPlayer} />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/genre/:genreName">
              <SeeAll />
            </Route>
            <Route exact path="/recent-search">
              <SeeAllRecentSearches />
            </Route>
            <Route path="/artist/:artistId" component={Artist} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/account" component={Account} />
            <Route path="/goPremium" component={WhyGoPremium} />
            <Route path="/RedirectPage">
              <RedirectPage />
            </Route>
            <Route
              path={`/playlist/:id`}
              Component={<Playlist webPlayer={webPlayer} />}
            >
              <PlaylistRender props={this} />
            </Route>
            <Route path="/create-album/">
              <CreateAlbum
                endpoint={`${base}/me/artists/albums`}
                title="Create new Album"
                update={false}
              />
            </Route>
            <Route
              path="/song-info/"
              render={props => (
                <SongInfo
                  {...props}
                  history={history}
                  songId={props.location.state.id}
                />
              )}
            />
            <Route path="/likedSongs/">
              <LikedSongs webPlayer={webPlayer} />
            </Route>
            <Route
              path="/albums/:id"
              Component={<Album webPlayer={webPlayer} />}
            >
              <AlbumRender webPlayer={webPlayer} />
            </Route>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/download">
              <Download />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/premium">
              <Premium />
            </Route>
            <Route exact path="/overview">
              <Overview />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/resetpassword/:token">
              <ResetPassword />
            </Route>
            <Route
              path="/verify/:token"
              render={props => <Entered {...props} />}
            />
            <Route exact path="/islanded">
              <Islinked />
            </Route>
            <Route exact path="/SuggestedArtist">
              <SuggestedArtist />
            </Route>
          </Switch>
          <WebPlayer ref={webPlayer} />
        </div>
      </Router>
    );
  }
}

export default App;
function PlaylistRender(props) {
  console.log(props);
  let id = useParams();
  return <Playlist id={id} webPlayer={webPlayer} />;
}
function AlbumRender(props) {
  let id = useParams().id;
  return <Album id={id} webPlayer={webPlayer} />;
}
