<?php
class Markdeep
{
    private static $ELEM = array(
    'HO' => array(
      'PAT' => "/^#\s(.+)/m",
			'IMP' => "<h1 class=\"showcaseHeader\">$1</h1>"
		),
    'HT' => array(
      'PAT' => "/^##\s(.+)/m",
			'IMP' => "<h2 class=\"showcaseHeaderSub\">$1</h2>"
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
			'IMP' => "<img src=\"$2\" alt=\"$1\" class=\"photo\">"
    ),
    'LI'  => array(
      'PAT' => "/\[(.+)\]\((.+)\)/m",
			'IMP' => "<a href=\"$2\" class=\"link\">$1</a>"
    )
  );
    
    public function __construct()
    {
    }
  
    public static function create(string $source) : string
    {
				foreach (Markdeep::$ELEM as $k => $spec) {
					$source = preg_replace($spec['PAT'],$spec['IMP'],$source);
				}
        return $source;
    }
}
