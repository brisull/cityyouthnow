<?php
$album 		= $_GET['album'];
$imagesArr	= array();
$i		= 0;

/* read the descriptions xml file */
if(file_exists('../thumbs/'.$album.'/desc.xml')) {
    $xml = simplexml_load_file('../thumbs/'.$album.'/desc.xml');
}
/* read the images from the album and get the
 * description from the XML file:
 */
if(file_exists('../thumbs/'.$album)) {
    $files = array_slice(scandir('../thumbs/'.$album), 2);
    if(count($files)) {
        foreach($files as $file) {
            if($file != '.' && $file != '..'  && $file != '.svn' &&  $file!='desc.xml') {
                if($xml) {
                    $desc = $xml->xpath('image[name="'.$file.'"]/text');
                    $description = $desc[0];
                    if($description=='')
                        $description = '';
                }
                $imagesArr[] = array('src' => 'thumbs/'.$album.'/'.$file,
                    'alt'	=> 'images/'.$album.'/'.$file,
                    'desc'	=> $description);
            }
        }
    }
}
$json 		= $imagesArr; 
$encoded 	= json_encode($json);
echo $encoded;
unset($encoded);
?>