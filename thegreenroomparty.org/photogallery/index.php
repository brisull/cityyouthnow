<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <title>City Youth Now - Photos of the 2011 Green Room Party</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="description" content="City Youth Now - 2011 Green Room Party photos" />
        <meta name="keywords" content="City Youth Now, San Francisco, juvenile court"/>
        <link rel="stylesheet" href="css/style.css" type="text/css" media="screen"/>
    </head>
    <style>
        span.reference{
            position:fixed;
            left:10px;
            bottom:0px;
            font-size:9px;
        }
        span.reference a{
            color:#aaa;
            text-decoration:none;
        }
        span.reference a:hover{
            color:#ddd;
            
        }

    </style>
    <body>
        <div class="albumbar">
            <span>2011 City Youth Now Green Room Party - <a href="http://smu.gs/tnH8Fc" target="_blank">Click Here To Purchase Photos</a></span>
            <div id="albumSelect" class="albumSelect">
                <ul>
                    <?php
                    $firstAlbum = '';
                    $i=0;
                    if(file_exists('images')) {
                        $files = array_slice(scandir('images'), 2);
                        
                        if(count($files)) {
                            natcasesort($files);
                            foreach($files as $file) {
                                if($file != '.' && $file != '..' && $file != '.svn' ) {
                                    if($i===0)
                                        $firstAlbum = $file;
                                    else
                                        echo "<li><a>$file</a></li>";
                                    ++$i;
                                }
                            }
                        }
                    }
                    ?>
                </ul>
                <div class="title down"><?php echo $firstAlbum;?></div>
            </div>
        </div>
        <div id="loading"></div>
        <div id="preview">
            <div id="imageWrapper">               
            </div>  
        </div>
        <div id="thumbsNavContainer">
			<div id="scrollLeft"></div>
			<div id="thumbsWrapper">
			</div>
			<div id="scrollRight"></div>
		</div>
        <div class="infobar">
            <span id="description"></span>
            <span class="reference">
                 </span>
        </div>
        <!-- The JavaScript -->
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script type="text/javascript" src="jquery.gallery.js"></script>
    </body>
</html>