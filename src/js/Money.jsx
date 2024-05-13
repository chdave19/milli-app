import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default class Money extends Component {
  constructor(props) {
    super(props);
    // AMOUNT IS 15
    this.state = {
      amount: [
        "$100",
        "$200",
        "$300",
        "$500",
        "$1,000",
        "$2,000",
        "$4,000",
        "$8,000",
        "$16,000",
        "$32,000",
        "$64,000",
        "$125,000",
        "$250,000",
        "$500,000",
        "$1 MILLION",
      ],
      listOffset: 0,
      windowWidth: window.innerWidth,
      currentStyle: 0,
      
    };

    this.listRef = React.createRef();
  }

  componentDidUpdate(props, state) {
    const {actualNo} = this.props;

    if (!(props.questionNo === this.props.questionNo)) {
      props.money(this.state.amount[actualNo - 1]);
      this.state.currentStyle >= 0 &&
        this.setState({
          currentStyle: this.state.listOffset * (actualNo - 1),
        });
    }

    state.windowWidth !== window.innerWidth &&
      this.setState({
        windowWidth: window.innerWidth,
        listOffset:
          this.listRef.current &&
          Number(
            getComputedStyle(this.listRef.current)
              .getPropertyValue("height")
              .replace("px", "")
          ),
      });
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
      listOffset:
        this.listRef.current &&
        Number(
          getComputedStyle(this.listRef.current)
            .getPropertyValue("height")
            .replace("px", "")
        ),
    });
    // console.log(this.state);
    // setInterval(()=>{}, 600)
  }

  closeMenu = () => {
    // this.props.resetMenu();
  };

  render() {
    // console.log(this.state);
    // if(this.listRef.current)

    return (
      <ul className={`amount ${this.props.displayProgress}`}>
        {/* <button className="close" onClick={this.closeMenu}><AiOutlineClose/></button> */}
        {this.state.amount
          .map((item, index) => (
            <>
              <li
                key={item}
                ref={index === 0 ? this.listRef : React.createRef()}
                className={
                  index === this.props.actualNo - 1
                    ? "li-bg-green"
                    : "li-bg-grey"
                }
                onClick={() => this.closeMenu()}
              >
                <span>{index + 1}</span>
                <span>{item}</span>
                {index === 0 && (
                  <div
                    key="454x34"
                    className="indicator"
                    style={{
                      transform: `translateY(-${this.state.currentStyle}px)`,
                    }}
                  ></div>
                )}
              </li>
            </>
          ))
          .reverse()}
      </ul>
    );
  }
}
