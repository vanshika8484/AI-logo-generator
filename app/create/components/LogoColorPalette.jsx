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
import React from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import Colors from '@/app/_data/Colors';

const LogoColorPalette = () => {
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
            className="border border-gray-200  overflow-hidden shadow-sm"
          >
            <div className="flex">
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
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