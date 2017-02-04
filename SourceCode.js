<!doctype html>

<html>
  <head>
    <title>Airput Demo</title>

      <style>
      
        body { margin: 0px; overflow: hidden; font-family: calibri; background: #E9F7FC; }

        #button { display: block; width: 200px; height: 200px; color: #FFF; background: #88CFEB; font-size: 20px; line-height: 100px; text-align: center; position: absolute; top: 300px; left: 600px; cursor: pointer; box-shadow: -5px 5px 0px rgba(32, 142, 185, 0.7); }

        #button:hover { background: #5FBEE2; }
      
        #menu { width: 400px; height: 1020px; position: absolute; right: -400px; background: #88CFEB; overflow-y: scroll; }
      
        #list     { width: 90%; float: left; margin-left: 5%; background: #FFF; padding-left: 0px; list-style-type: none; }
        #list li  { height: 50px; line-height: 50px; border-top: 1px solid #F5F5F5; padding-left: 10px; font-size: 16px; cursor: pointer; }
        #list li:hover,
        #list li.selected { background: #D2EDF7; }

        a:link        { color: #0d3653; text-decoration: none; font-weight: bold; }
        a:visited     { color: #0d3653; text-decoration: none; font-weight: bold; }
        a:hover       { color: #0d3653; text-decoration: none; font-weight: bold; }
        a:active      { color: #0d3653; text-decoration: none; font-weight: bold; }

        #compbutton { display: block; width: 200px; height: 100px; color: #FFF; background: #88CFEB; font-size: 20px; line-height: 100px; text-align: center; position: absolute; top: 100px; left: 100px; cursor: pointer; box-shadow: -5px 5px 0px rgba(32, 142, 185, 0.7); }

      </style>
  </head>

  <body>

    <a id="button">Play!</a>

    <div id="menu">
      <ul id="list">
        <li class="selected">Home</li>
        <li><a href="../menu-demo/bsl.html">British Sign Language</a></li>  
        <li><a href="../menu-demo/index0.html">Rock Paper Scissors</a></li>    
    
      </ul>
    </div>

    <script src="../trainer-ui/js/jquery.min.js"></script>
    <script src="../lib/leap.js"></script>
    <script src="../leaptrainer.min.js"></script>


<script type="text/javascript">
function changeText(aiTextValue, userTextValue){
  document.getElementById('AIText').innerHTML = aiTextValue;
  document.getElementById('UserText').innerHTML = userTextValue;
}
</script>

   <script>
      $(document).ready(function() {
        var menu = $('#menu');
        var button = $('#button');
        function open (evt)  { menu.animate({right: 0}); button.html('Close'); }
        function close (evt) { menu.animate({right: -400}); button.html('Play!'); }  

        function determineOutput(input) {
          var result = Math.random();

          if (result >= 0  && result < 0.33) {
            result = 'a';
          } else if (result >= 0.33  && result < 0.67) {
            result = 'b';
          } else {
            result = 'c';
          }

          if (input == result) {

            button.html('You drew!');

          } else if (input == 'b' && result == 'c') {
            button.html('Computer Wins! <p> You: Paper - AI: Scissors');
          } else if (input == 'c' && result == 'a') {
            button.html('Computer Wins! <p> You: Scissors - AI: Rock');
          } else if (input == 'a' && result == 'b') {
            button.html('Computer Wins! <p> You: Rock - AI: Paper'); 
          } else if (input == 'c' && result == 'b') {
            button.html('You win! <p> You: Scissors - AI: Paper');
          } else if (input == 'a' && result == 'c') {
            button.html('You win! <p> You: Rock - AI: Scissors');
          } else if (input == 'b' && result == 'a') {
            button.html('You win! <p> You: Paper - AI: Rock');
          } else {
            window.alert("Error");
            }

              // changeText(input, result);

          }

        button.click(function ()  { if (menu.css('right') == '0px') { close(); } else { open(); }  });
        var trainer = new LeapTrainer.Controller(); 

        trainer.fromJSON('{"name":"ROCK","pose":true,"data":[[{"x":0.3472222222222222,"y":-0.020960002294884667,"z":-0.031184413997195435,"stroke":1},{"x":0.30555555555555547,"y":-0.01844480201949837,"z":-0.027442284317531988,"stroke":1},{"x":-0.6527777777777778,"y":0.039404804314383035,"z":0.05862669831472743,"stroke":1}]]}');

        trainer.fromJSON('{"name":"SCISSORS","pose":true,"data":[[{"x":0.12415655626236691,"y":-0.0035680753743212905,"z":0.2794715124497852,"stroke":1},{"x":0.06218584851638298,"y":-0.006091720006584337,"z":0.24017616251673835,"stroke":1},{"x":0.0002151407703990249,"y":-0.008615364638847385,"z":0.2008808125836914,"stroke":1},{"x":-0.1865575455491489,"y":0.018275160019753017,"z":-0.7205284875502148,"stroke":1}]]}');

        trainer.fromJSON('{"name":"PAPER","pose":true,"data":[[{"x":0.19505422842998388,"y":0.009075464724599955,"z":0.06034702140888948,"stroke":1},{"x":0.07678524847948953,"y":0.008574620553011558,"z":0.08177213059087607,"stroke":1},{"x":-0.041483731471004814,"y":0.008073776381423155,"z":0.10319723977286266,"stroke":1},{"x":-0.15975271142149916,"y":0.007572932209834758,"z":0.12462234895484914,"stroke":1},{"x":-0.2780216913719935,"y":0.007072088038246362,"z":0.14604745813683573,"stroke":1},{"x":-0.39629067132248785,"y":0.006571243866658236,"z":0.16747256731882232,"stroke":1},{"x":0.6037093286775121,"y":-0.04694012577377402,"z":-0.6834587661831348,"stroke":1}]]}');

        trainer.fromJSON('{"name":"START","pose":false,"data":[[{"x":0.1207806930744316,"y":0.09303236684859573,"z":0.04363054042643613,"stroke":1},{"x":0.0025530928825712312,"y":0.24737309265072516,"z":0.11910522275410393,"stroke":1},{"x":0.016426991512226777,"y":0.21925040195010947,"z":0.10212973480612106,"stroke":1},{"x":0.1008168998374922,"y":0.10125583802224647,"z":0.04351765248008391,"stroke":1},{"x":-0.014243172442549523,"y":0.22858281614092268,"z":0.09940746375256204,"stroke":1},{"x":-0.0012980740840925903,"y":0.1828275667703868,"z":0.07183489493899384,"stroke":1},{"x":0.10288094960107269,"y":0.0488418566901242,"z":0.011224559828429709,"stroke":1},{"x":0.00735300580878874,"y":0.11311816336240443,"z":0.03270072578152003,"stroke":1},{"x":-0.08798678796984569,"y":0.15719878410477883,"z":0.042491660011505866,"stroke":1},{"x":-0.01971301485679934,"y":0.06818771113266087,"z":0.005594527042846353,"stroke":1},{"x":0.06466318849950456,"y":-0.0507433872332167,"z":-0.03871280259432243,"stroke":1},{"x":0.004682916744614449,"y":-0.035827790861081454,"z":-0.03598274014322671,"stroke":1},{"x":-0.07914584724373629,"y":0.00533695195613304,"z":-0.026213992224536797,"stroke":1},{"x":-0.07488718527701486,"y":-0.029225576784732588,"z":-0.039698647880008306,"stroke":1},{"x":0.012936257388335884,"y":-0.14515661507331645,"z":-0.07264780187191988,"stroke":1},{"x":0.006653078394525794,"y":-0.17715718420663762,"z":-0.07974686899566975,"stroke":1},{"x":-0.08211795752984613,"y":-0.12173982565970054,"z":-0.06988598987381547,"stroke":1},{"x":-0.08476029709806426,"y":-0.15252826246112827,"z":-0.0825833147013762,"stroke":1},{"x":0.004405262758384765,"y":-0.7526269073492748,"z":-0.12616482353772773,"stroke":1}]]}');

        trainer.fromJSON('{"name":"OKAY","pose":true,"data":[[{"x":0.025275053454133445,"y":0.016033248708351405,"z":0.2885331004661158,"stroke":1},{"x":-0.025512110076815267,"y":0.03312277489430926,"z":0.21475551674435256,"stroke":1},{"x":-0.07629927360776398,"y":0.05021230108026711,"z":0.14097793302258932,"stroke":1},{"x":-0.12708643713871268,"y":0.06730182726622497,"z":0.0672003493008263,"stroke":1},{"x":0.20362276736915855,"y":-0.16667015194915286,"z":-0.7114668995338842,"stroke":1}]]}');

        trainer.on('START', close);
        trainer.on('OKAY', close);
        trainer.on('ROCK', function() { determineOutput('a') });
        trainer.on('PAPER', function() { determineOutput('b') });
        trainer.on('SCISSORS', function() { determineOutput('c') });
      });

      
    </script>


  </body>
</html>
