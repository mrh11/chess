interface PawnProps {
  color?: string;
}

const Pawn = ({ color }: PawnProps): JSX.Element => (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="60" width="60"
	 viewBox="0 0 503.467 503.467" style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}}>
     <g transform="translate(15 1)">
	<path  style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}} d="M236.622,2.414c37.547,0,68.267,30.72,68.267,68.267s-30.72,68.267-68.267,68.267
		s-68.267-30.72-68.267-68.267S199.076,2.414,236.622,2.414z M176.889,173.08c-9.387,0-17.067-7.68-17.067-17.067
		s7.68-17.067,17.067-17.067h59.733h59.733c9.387,0,17.067,7.68,17.067,17.067s-7.68,17.067-17.067,17.067
		c0,0-8.533,25.6-8.533,85.333s42.667,102.4,42.667,136.533c0,17.067-17.067,34.133-34.133,34.133H176.889
		c-17.067,0-34.133-17.067-34.133-34.133c0-34.133,42.667-76.8,42.667-136.533c0-12.8-1.707-34.133-4.267-51.2L176.889,173.08z"/>
	<path  style={{ fill: color === 'white' ? '#ECF4F7' : '#252626'}} d="M364.622,463.214v34.133h-256v-34.133c0-17.067,17.067-34.133,34.133-34.133h34.133h119.467h34.133
		C347.556,429.08,364.622,446.147,364.622,463.214"/>
</g>
<path style={{ fill: '#51565F'}} d="M379.622,502.614h-256c-2.56,0-4.267-1.707-4.267-4.267v-34.133c0-19.627,18.773-38.4,38.4-38.4
	h11.093c-9.387-7.68-15.36-18.773-15.36-29.867c0-15.36,7.68-32.427,17.067-51.2c11.947-24.747,25.6-52.053,25.6-85.333
	c0-10.24-1.707-28.16-4.267-51.2c0-2.56,1.707-4.267,3.413-5.12c2.56,0,4.267,1.707,5.12,3.413c2.56,23.04,4.267,40.96,4.267,52.053
	c0,34.987-13.653,64-26.453,88.747c-8.533,17.92-16.213,34.133-16.213,47.787c0,14.507,15.36,29.867,29.867,29.867
	c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-34.133c-14.507,0-29.867,15.36-29.867,29.867v29.867h247.467
	v-29.013c0-14.507-15.36-29.867-29.867-29.867H226.022c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267h85.333
	c14.507,0,29.867-15.36,29.867-29.867c0-13.653-7.68-29.013-16.213-47.787c-11.947-25.6-26.453-53.76-26.453-88.747
	c0-58.027,7.68-84.48,8.533-86.187v-0.853c0-0.853,0.853-0.853,0.853-0.853c0.853-0.853,1.707-0.853,2.56-0.853
	c6.827,0,12.8-5.973,12.8-12.8c0-6.827-5.973-12.8-12.8-12.8H191.036c-6.827,0-12.8,5.973-12.8,12.8c0,6.827,5.973,12.8,12.8,12.8
	h85.333c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-85.333c-11.947,0-21.333-9.387-21.333-21.333
	c0-11.947,9.387-21.333,21.333-21.333h25.6c-23.04-11.947-38.4-36.693-38.4-64C178.236,32.427,210.663,0,250.769,0
	s72.533,32.427,72.533,72.533c0,27.307-15.36,52.053-38.4,64h25.6c11.947,0,21.333,9.387,21.333,21.333
	c0,10.24-7.68,19.627-17.92,21.333c-1.707,7.68-7.68,34.133-7.68,81.067c0,33.28,13.653,60.587,25.6,85.333
	c9.387,18.773,17.067,35.84,17.067,51.2c0,11.093-6.827,22.187-15.36,29.867h11.093c19.627,0,38.4,18.773,38.4,38.4V499.2
	C383.889,500.907,382.182,502.614,379.622,502.614z M251.622,7.68c-34.987,0-64,29.013-64,64s29.013,64,64,64s64-29.013,64-64
	S286.609,7.68,251.622,7.68z M284.902,67.414c-1.707,0-3.413-1.707-4.267-3.413c-2.56-10.24-11.093-18.773-21.333-21.333
	c-2.56-0.853-3.413-2.56-3.413-5.12c0.853-2.56,2.56-3.413,5.12-3.413c13.653,3.413,24.747,14.507,28.16,28.16
	c0.853,2.56-0.853,4.267-3.413,5.12C285.756,67.414,284.902,67.414,284.902,67.414z"/>
   </svg>)

export default Pawn;