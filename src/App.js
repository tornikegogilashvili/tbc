import './App.css';
import tbcicon from  './img/icon.svg'
function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid imagediv">
        <div className='leftdiv'>
          <a href='#'><img src={tbcicon} alt='tbcicon' className='tbcicon' /></a>
    
        <a class="navbar-brand" href="#">&nbsp;&nbsp;  აკადემია</a>
        </div>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">მთავარი</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TBC IT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TBC x USAID</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">რისკები</a>
          </li>
        </ul>
      </div>
  </div>
</nav>
    </div>
  );
}

export default App;
