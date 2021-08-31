interface KingProps {
  color?: string;
}

const King = ({ color }: KingProps): JSX.Element => (
	<div draggable>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="80" width="80"
	 viewBox="0 0 503.467 503.467" style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}}>
     <g transform="translate(15 1)">
	<path style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}} d="M364.733,464.067V498.2h-256v-34.133c0-17.067,17.067-34.133,34.133-34.133H177h119.467H330.6
		C347.667,429.933,364.733,447,364.733,464.067"/>
	<path style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}} d="M177,173.933c-9.387,0-17.067-7.68-17.067-17.067S167.613,139.8,177,139.8h42.667V80.067H177V45.933
		h42.667V3.267H253.8v42.667h42.667v34.133H253.8V139.8h42.667c9.387,0,17.067,7.68,17.067,17.067s-7.68,17.067-17.067,17.067
		c0,0-8.533,25.6-8.533,85.333S330.6,361.667,330.6,395.8c0,17.067-17.067,34.133-34.133,34.133H177
		c-17.067,0-34.133-17.067-34.133-34.133c0-34.133,42.667-76.8,42.667-136.533c0-12.8-1.707-34.133-4.267-51.2L177,173.933z"/>
</g>
<path style={{ fill: '#51565F'}} d="M379.733,503.467h-256c-2.56,0-4.267-1.707-4.267-4.267v-34.133c0-19.627,18.773-38.4,38.4-38.4
	h11.093c-9.387-7.68-15.36-18.773-15.36-29.867c0-15.36,7.68-32.427,17.067-51.2c11.947-24.747,25.6-52.053,25.6-85.333
	c0-10.24-1.707-28.16-4.267-51.2c0-2.56,1.707-4.267,3.413-5.12c2.56,0,4.267,1.707,5.12,3.413c2.56,23.04,4.267,40.96,4.267,52.053
	c0,34.987-13.653,64-26.453,88.747c-8.533,17.92-16.213,34.133-16.213,47.787c0,14.507,15.36,29.867,29.867,29.867
	c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-34.133c-14.507,0-29.867,15.36-29.867,29.867v29.867h247.467
	v-29.013c0-14.507-15.36-29.867-29.867-29.867H226.133c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h85.333
	c14.507,0,29.867-15.36,29.867-29.867c0-13.653-7.68-29.013-16.213-47.787c-11.947-25.6-26.453-53.76-26.453-88.747
	c0-59.733,8.533-85.333,8.533-87.04c0.853-1.707,2.56-2.56,4.267-2.56c6.827,0,12.8-5.973,12.8-12.8c0-6.827-5.973-12.8-12.8-12.8
	H268.8c-2.56,0-4.267-1.707-4.267-4.267V81.067c0-2.56,1.707-4.267,4.267-4.267h38.4V51.2h-38.4c-0.853,0-2.56-0.853-3.413-0.853
	c-0.853,0-0.853-1.707-0.853-3.413v-38.4h-25.6v38.4c0,2.56-1.707,4.267-4.267,4.267h-38.4v25.6h38.4
	c2.56,0,4.267,1.707,4.267,4.267V140.8c0,2.56-1.707,4.267-4.267,4.267H192c-6.827,0-12.8,5.973-12.8,12.8
	c0,6.827,5.973,12.8,12.8,12.8h85.333c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267H192
	c-11.947,0-21.333-9.387-21.333-21.333c0-11.947,9.387-21.333,21.333-21.333h38.4v-51.2H192c-2.56,0-4.267-1.707-4.267-4.267V46.933
	c0-2.56,1.707-4.267,4.267-4.267h38.4v-38.4c0-2.56,1.707-4.267,4.267-4.267H268.8c0.853,0,2.56,0.853,3.413,0.853
	c0.853,0,0.853,1.707,0.853,3.413v38.4h38.4c2.56,0,4.267,1.707,4.267,4.267v34.133c0,2.56-1.707,4.267-4.267,4.267h-38.4v51.2h38.4
	c11.947,0,21.333,9.387,21.333,21.333c0,10.24-7.68,19.627-17.92,21.333c-1.707,7.68-7.68,34.133-7.68,81.067
	c0,33.28,13.653,60.587,25.6,85.333c9.387,18.773,17.067,35.84,17.067,51.2c0,11.093-6.827,22.187-15.36,29.867H345.6
	c19.627,0,38.4,18.773,38.4,38.4V499.2C384,501.76,382.293,503.467,379.733,503.467z"/>
</svg>
</div>)

export default King;