import { Box } from "@mui/material";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
	const [hasMore, setHasMore] = useState(true);
	const [data, setData] = useState(Array.from({ length: 50 }));

	const fetchmoredata = () => {
		setTimeout(() => {
			setData(data.concat(Array.from({ length: 50 })));
		}, 2000);
	};

	return (
		<Box className="App">
			<h1>React Infiite scroll</h1>
			<InfiniteScroll
				dataLength={data.length}
				next={fetchmoredata}
				hasMore={hasMore}
				loader={<p style={{fontSize:"24px", color:"green", fontWeight:"bold"}}>Loading...</p>}>
				{data.map((item, index) => {
					return (
						<Box
							sx={{
								border: "1px solid red",
								mb: "25px",
								padding: "10px",
								width: "30%",
								mx: "auto",
							}}
							key={index}>
							{" "}
							<h3 sx={{ fw: "bold",}}>#{index + 1} - element</h3>

						</Box>
					);
				})}
			</InfiniteScroll>
		</Box>
	);
}

export default App;
