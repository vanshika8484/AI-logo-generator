// import React from 'react'
// import HeadingDescription from './HeadingDescription'
// import Lookup from '@/app/_data/Lookup'
// import Colors from '@/app/_data/Colors'

// const LogoColorPalette = () => {
//   return (
//      <div className='my-10'>
//          <HeadingDescription title={Lookup.LogoColorPaletteTitle} description={Lookup.LogoColorPaletteDesc} />
//          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 '>
//           {Colors.map((palette,index)=>(
//            <div>
//             {palette.colors.map((color,colorIndex)=>(
//              <div key={colorIndex}>
//               <div className="h-24 w-24" style={{backgroundColor:color}}></div>
//              </div>
//             ))}
//            </div>
//           ))}
//          </div>
//      </div>
   
//    )
// }

// export default LogoColorPalette
import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import Colors from '@/app/_data/Colors';

const LogoColorPalette = ({onHandleInputChange}) => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
        {Colors.map((palette, index) => (
          <div
            key={index}
         >
            <div className={`flex p-1 cursor-pointer ${selectedOption==palette.name && 'border-3 rounded-lg border-primary'}`}>
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  onClick={()=>{setSelectedOption(palette.name);
                    onHandleInputChange(palette.name)
                  }
                  }
                  className="flex-1 h-24"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoColorPalette;