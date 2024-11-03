import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../utils/MyProvider";

import { LineChart } from "@mui/x-charts/LineChart";

export default function PageToRead() {
  const { getStoreReadList } = useContext(MyContext);
  const [readList, setReadList] = React.useState(getStoreReadList());
  const [counter, setCounter] = useState(1);
  const chatData = [];
  const count = [];

  useEffect(() => {
    setReadList(getStoreReadList());
  }, []);

  for (let book of readList) {
    chatData.push(book.totalPages);
  }

  for (let i = 1; i <= readList.length; i++) {
    count.push(i);
  }

  // console.log(chatData);
  return (
    <div className="w-full flex justify-center bg-gray-200">
      <LineChart
        xAxis={[{ data: count }]}
        series={[
          {
            data: chatData,
          },
        ]}
        width={800} // Default width for larger screens
        height={500} // Default height for larger screens
        style={{
          width: "100%", // 100% width to take full space of the container
          maxWidth: "800px", // Restrict max width
          height: "auto", // Adjust height based on aspect ratio
        }}
        className="sm:w-full md:w-3/4 lg:w-1/2 xl:w-2/5 h-auto"
      />
    </div>
  );
}
