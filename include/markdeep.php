<?php
class Markdeep
{
    private static $ELEM = array(
    'HO' => array(
      'PAT' => "/^#\s(.+)/m",
			'IMP' => "<h1>$1</h1>"
		),
    'HT' => array(
      'PAT' => "/^##\s(.+)/m",
			'IMP' => "<h2>$1</h2>"
    ),
    'HR'  => array(
      'PAT' => "/^(---)$/m",
			'IMP' => "<hr/>"
    ),
    'IT' => array(
      'PAT' => "/\\\i(.+)\\\i/m",
			'IMP' => "<i>$1</i>"
    ),
    'BD'   => array(
      'PAT' => "/\\\b(.+)\\\b/m",
			'IMP' => "<b>$1</b>"
    ),
    'IM' => array(
      'PAT' => "/\R!\[(.+)\]\((.+)\)/m",
			'IMP' => "<img src=\"$2\" alt=\"$1\">"
    ),
    'LI'  => array(
      'PAT' => "/\[(.+)\]\((.+)\)/m",
			'IMP' => "<a href=\"$2\">$1</a>"
    )
  );
    
    public function __construct()
    {
    }
  
    public static function create(string $source)
    {
        $file = file_get_contents($source);
				foreach (Markdeep::$ELEM as $k => $spec) {
					$file = preg_replace($spec['PAT'],$spec['IMP'],$file);
				}
        return $file;
    }
}
