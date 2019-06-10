<!DOCTYPE html>
<html>
<head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
	<title>Concentration Photos!</title>
</head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/header.php'; ?>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/markdeep.php'; ?>
<div class="showcase wide">
<?php
$in = <<<BOD
# Concentration:
## What is the central idea of your concentration?
Human emotion is best conveyed with motion.
It adds distortion to the forms, but in turn the motion removes focus from any single position of the subject.
This new dimension of time expands the subject to contain motive.
Traditional still images lack the ability to capture the dimension of time, which is a core part of the human experience.
Time enables one to show more than statues; it will show the whole progression of a tragedy at once, or the joy of an entire party.
---
## How does the work in your concentration demonstrate the exploration of your idea?
You may refer to specific images as examples.
When referencing specific images, please indicate the image numbers.<br>
All the images were taken with a homemade pinhole camera.
While my concentration does not explicitly rely on the pinhole, it does require long exposures.
My first images were taken in New York City with 400-speed film.
These are images nine and eleven.
They are later in the progression because I took them, without knowing what I wanted to create.
I had simply been attracted to them.
Images one and two are from the first photo shoot where I explicitly planned my concentration.
Image two, features cars moving quickly and in an unpredictable way which, unsettles me.
The emotion I felt I could capture began to seep out in image five.
The ghostly visage of my own face suggests the self-image issues I have.
Finally, I took my camera to my friends birthday party.
In image six, I took a shot of all my friends as we discuss the plans for the day.
Our discussion was still a party, and the people are visibly moving around.
Later in image ten, my friends examine the exquisite corpse they had all created.
Blur has taken over almost all of the image, even after I was telling them they needed to keep the paper in the same place.
My best piece, image twelve, is of all the attendees posing for a photo.
Because we were just getting on our way to the park, they are visibly antsy in the twenty-second long exposure.
# Photos:
BOD;
echo Markdeep::create($in);
?>
	<div class="imageBoard">
		<?php
	  foreach(glob("photos/*") as $path) {
	    echo "
	      <a target=\"_blank\" href=\"$path\">
	        <img src=\"$path\" class=\"photo\"/>
	      </a>
	    ";
	  }
	  ?>
	</div>
</div>
</body>
</html>