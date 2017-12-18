<?php
if(isset($_POST['commentFrmSubmit']) &&  !empty($_POST['comment'])){
    $status = 'ok';
}else{
	$status = 'err';
}   
    // Output status
    echo $status;die;
