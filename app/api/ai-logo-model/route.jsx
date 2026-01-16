// import { NextResponse } from "next/server";

// export async function POST(req){
//     const{prompt}=await req.json();
//     try{
//         //Generate AI text Prompt for Logo
//         const AiPromptResult=await main.sendMessage(prompt);
// console.log(JSON.AiPromptResult.response.text()) 
//         const AiPrompt=JSON.parse(AiPromptResult.response.text());
// return NextResponse.json(AiPrompt);
// }
//     catch(err){
//         return Response.json({success:false,error:err.message});
//     }
// }
// // import { NextResponse } from "next/server";
// // import { generatePrompt } from '@/configs/AiModel';

// // export const dynamic = 'force-dynamic'; // Add this line

// // export async function POST(req) {
// //   try {
// //     console.log("API Route: Received request");
// //     const { prompt } = await req.json();
    
// //     if (!prompt) {
// //       console.error("API Error: No prompt provided");
// //       return NextResponse.json(
// //         { success: false, error: "Prompt is required" },
// //         { status: 400 }
// //       );
// //     }

// //     console.log("API Route: Calling generateAIContent with prompt:", prompt.substring(0, 100) + "...");
// //     const aiResponse = await generatePrompt(prompt);
// //     console.log("API Route: Successfully generated content");
    
// //     return NextResponse.json({ 
// //       success: true, 
// //       data: aiResponse 
// //     });

// //   } catch (error) {
// //     console.error('API Route Error:', {
// //       message: error.message,
// //       stack: error.stack,
// //       code: error.code,
// //       details: error.details
// //     });
    
// //     return NextResponse.json(
// //       { 
// //         success: false, 
// //         error: "Failed to generate content",
// //         details: process.env.NODE_ENV === 'development' ? error.message : undefined
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }
// // import { generateAIContent } from "@/configs/AiModel";

// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     const { brandName } = body;

// //     if (!brandName) {
// //       return Response.json(
// //         { error: "Brand name is required" },
// //         { status: 400 }
// //       );
// //     }

// //     const prompt = `Create a modern, minimal logo prompt for a brand called "${brandName}".
// // Return ONLY valid JSON with fields: prompt, style, colors`;

// //     const aiResponse = await generateAIContent(prompt);

// //     return Response.json({ 
// //       success: true, 
// //       data: JSON.parse(aiResponse) // Parse the response as JSON
// //     });

// //   } catch (error) {
// //     console.error("AI LOGO ERROR:", error);
// //     return Response.json(
// //       {
// //         success: false,
// //         message: error.message,
// //         ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
// //       },
// //       { status: error.status || 500 }
// //     );
// //   }
// // }




import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    
    console.log("Received prompt:", prompt); // Debug log

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      success: true,
      text: text 
    });
    
  } catch (error) {
    console.error("API Error Details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to generate content",
        details: error.message 
      },
      { status: 500 }
    );
  }
}
