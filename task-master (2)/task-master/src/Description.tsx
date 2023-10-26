import screen1 from './assets/defaultview.png'
import screen2 from './assets/rotationScreen.png'
import screen3 from './assets/selectOpened.png'
import screen4 from './assets/colorSelect.png'

export const Description = () => {
    return <div>
        <h3>Task:</h3>
        <ul>
            <li>Display SVG (src/assets/floor_plan1.svg) inside "Implemetation" tab</li>
            <li>Add a "Toggle" button that <u>smoothly</u> (use animation) rotates an SVG by 180 degrees when clicked, and clicking it again should return the SVG to its original position.</li>
            <li>Add select element. It should contain 10 randomly generated colors.
                <ul>
                    <li>Colors should be dynamically generated, upon initializing the component.</li>
                    <li>Generate color using <code>getRandomHexColor()</code> which is located in <b>src/utils/colors.ts</b></li>
                    <li>Generate labels for your generated colors using <code>hexColorToGeneralName(yourHexColor)</code> which is located in <b>src/utils/colors.ts</b></li>
                    <li>Default first option is selected</li>
                    <li>Option example: <code>&lt;option value="#a96845"&gt;Cooper&lt;/option&gt;</code></li>
                </ul>
            </li>
            <li>Upon selecting a color from the options, all locations on the SVG floorplan should immediately update to the chosen color.
                <ul>
                    <li>List of SVG element IDs that require color changes: #rect1408, #rect1410, #path1529, #rect1412, #path1585.
                        Also same list is present as constant in <b>src/constants/floorplan.ts</b> </li>
                </ul>
            </li>
        </ul>

        <p>Use TypeScript and SCSS for styles</p>
        <p>Preferable functional components and hooks</p>
        <p>You are welcome to install any necessary tools, and you have the flexibility to modify any files, including
            the floorplan SVG, to achieve your objectives.</p>

        <p>For additional information see screenshots:</p>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc' }} src={screen1} alt=""/>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc'}} src={screen2} alt=""/>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc'}} src={screen3} alt=""/>
        <img style={{width: '60%', height: 'auto', border: '2px solid #ccc'}} src={screen4} alt=""/>
    </div>
}