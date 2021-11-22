import React, { useEffect, useState, useRef } from "react";
import Faker from "faker";

// TODOS：把itemSize和listData放到data里。

const VirtualList = () => {
  // 数据项高度
  const itemSize = 100;
  // 数据源
  const [listData, setListData] = useState([]);
  // 要显示的数据源
  const [showedData, setShowedData] = useState([]);
  // 可显示的列表项数
  let showedCount = useRef(0);
  // 偏移量
  let startOffset = useRef(0);
  // 起始索引
  let startIndex = useRef(0);
  // 结束索引
  let endIndex = useRef(0);

  // 生成假数据
  const getTenListData = () => {
    if (listData.length >= 200) {
      return [];
    }
    return new Array(10).fill({}).map(() => ({
      id: Faker.random.uuid(),
      title: Faker.name.title(),
      content: Faker.random.words(),
    }));
  };

  // 初始化展示的数据条数，结束数据的索引，展示的数据
  useEffect(() => {
    const scrollHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    showedCount.current = Math.ceil(scrollHeight / itemSize);
    endIndex.current = startIndex.current + showedCount.current;
    const data = getTenListData();
    setListData(data);
    setShowedData([...data].slice(startIndex.current, endIndex.current));
  }, []);

  // 列表总高度
  const listHeight = listData.length * itemSize;

  // 偏移量对应的css
  const getTransform = () => {
    return `translate3d(0,${startOffset.current}px,0)`;
  };

  // 容器元素的ref
  const containerRef = useRef();

  // 滚动事件
  const scrollEvent = () => {
    const scrollTop = containerRef.current.scrollTop;
    startIndex.current = Math.ceil(scrollTop / itemSize);
    endIndex.current = startIndex.current + showedCount.current;
    console.log(endIndex.current);
    if (endIndex.current > listData.length) {
      setListData([...listData].concat(getTenListData()));
    }
    setShowedData([...listData].slice(startIndex.current, endIndex.current));
    startOffset.current = scrollTop - (scrollTop % itemSize);
  };

  // DOM结构
  return (
    <div
      className="virtual-list-container"
      ref={containerRef}
      onScroll={scrollEvent}
      style={{ overflow: "scroll", position: "relative", height: "99vh" }}
    >
      <div
        className="virtual-list-phantom"
        style={{
          height: listHeight + "px",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      ></div>
      <div
        className="virtual-list"
        style={{
          transform: getTransform(),
          textAlign: "center",
        }}
      >
        {showedData.map((data) => (
          <div
            className="virtual-list-item"
            key={data.id}
            style={{ height: itemSize + "px", lineHeight: itemSize + "px" }}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
