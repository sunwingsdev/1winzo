/** @type {import('tailwindcss').Config} */
import animatePlugin from "tailwindcss-animate";
import scrollbar from "tailwind-scrollbar";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your file structure
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
			componentBgPrimary:"#222843",
        // componentBgSecondary:"#243254",
        redBgColor:"#91001F99",
        backgroundSecondaryColor: "#C9A33D",
        backgroundV2Color: "#ffE116",
        formBgColor: "rgba(255, 255, 255, 0.3)",
        AffiliatePrimaryBg: "#212335",
        bottomNavBgColor: "#2a3254",
			bgBlack:"#000000",
			bgPrimary:"#f0ece1",
			bgBlue:'rgb(36, 58, 72)',
			bgSecondary:"#333333",
			bgSidebarsBg:"#4a4e42",
			bgTabActiveColor:"#f2dca7",
			bgTableHeader:"#E4E4E4",
			bgYellowColor:"#ffcc2f",
			bgHoverYellowColor:"#f1b910",
			bgModalColor:"#EEEEEE",
			bgRed:"#FF0000",
			bgMatchedColor:"#3b5160",
			textTableHeader:"#243A48",
			textHeadingColor:"#243a48",
			textBlueColor:"#2789ce",
			textRedColor:"#DC3545",
			textGreenColor:"#198754",
			borderTableColor:"#7e97a7",
			borderYellowColor:"#cb8009",
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
           primaryColorTwo: "#191e32",
          // primaryColor: "#111421",
          primaryColor: "#212121",
          primaryColorJili: "#221919",
        },
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
			textSecondaryColor: "#C9A33D",
        textSecondaryColorTwo: "#d7b533",
        textSecondaryColorThree: "#ffE116",
        // textRedColor: "#ff086b",
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			jili: {
          bgPrimary: "#FFE400",
          bgBlack:"#000000", 
          bgSecondary: "#333333", 
          textPrimary: "#FFE400", 
          textSecondary: "#F5DB21",
          textThird: "#999999",
          bgForm:"#4d4d4d" ,
          bgdWTabsColor:"#2d2d2d",
        },
	// 		 backgroundImage: {
    //     'gradient-white-to-light': 'linear-gradient(180deg, #ffffff, #eeeeee)',
    //   }
  		},

		backgroundImage: {
        "white-to-darkblue":
          "linear-gradient(to right, #2a3254 0%, #445187 15%, #445187 30%, #2a3254 55%, #2a3254 100%)",
        "white-to-gold":
          "linear-gradient(to right, rgba(255,255,255,0.2), #C9A33Dcc)",
        // 'gold-gradient': 'linear-gradient(to right, #d4b665, #a46c0d 50%)',
        "gold-gradient":
          "linear-gradient(to right, #d4b665, #a46c0d 50%, #C9A33D)",
      },
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	}
    
  },
  // plugins: [animatePlugin],
  plugins: [animatePlugin, scrollbar],
};
