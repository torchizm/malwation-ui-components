import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LabelWithIconButton from "./components/LabelWithIconButton";
import IconButton from "./components/IconButton";

import {
  FaAlignJustify,
  FaAlignRight,
  FaQuestionCircle,
  FaShieldAlt,
  FaWater,
} from "react-icons/fa";

import { ImShuffle } from "react-icons/im";

import InputComponent from "./components/Input";
import React, { useState } from "react";
import IconInput from "./components/IconInput";
import LabelInput from "./components/LabelInput";
import Modal from "./components/Modal";

import style from "./App.module.css";
import Table, { TableOptions } from "./components/Table";
import Tooltip from "./components/Tooltip";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [buttonType, setButtonType] = useState("button-right");
  const [openModal, setOpenModal] = useState(true);

  const [tableOptions, setTableOptions] = useState<TableOptions>({
    tdStyle: {
      textAlign: "center",
    },
  });

  const handleButtonClick = () => {
    setNumber(number + 1);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleModalButton = () => {
    const type = buttonType === "button-right" ? "button-left" : "button-right";
    setButtonType(type);
  };

  type alignType = "left" | "right" | "center";
  const textAlignProperties: alignType[] = ["left", "right", "center"];

  const handleShuffle = () => {
    let tableOptions: TableOptions = {
      trStyle: {
        textAlign:
          textAlignProperties[
            Math.round(Math.random() * textAlignProperties.length)
          ],
      },
      thStyle: {
        textAlign:
          textAlignProperties[
            Math.round(Math.random() * textAlignProperties.length)
          ],
      },
    };

    setTableOptions(tableOptions);
  };

  const tableData: any = () => {
    let data: any[][] = [];

    for (let i = 0; i < 10; i++) {
      if (data[i] === undefined) {
        data.push([]);
      }

      data[i][0] = <span style={{ textAlign: "center" }}>{i + 1}</span>;
      data[i][1] = <span>This is first</span>;
      data[i][2] = <span>This is second</span>;
    }

    return data;
  };

  return (
    <div className="app">
      <Header />

      <section>
        <h2
          style={{
            fontSize: "4rem",
          }}
        >
          {number}
        </h2>
      </section>

      <section>
        <span>Regular clicky button.</span>
        <Button onClick={handleButtonClick}>Clicky Button</Button>
      </section>

      <section>
        <span>Button with label and icon.</span>

        <LabelWithIconButton
          onClick={handleButtonClick}
          icon={<FaAlignJustify />}
        >
          Clicky Button
        </LabelWithIconButton>

        <LabelWithIconButton
          onClick={handleButtonClick}
          icon={<FaAlignRight />}
          position={"right"}
        >
          Clicky Button
        </LabelWithIconButton>
      </section>

      <section>
        <span>Only icon button.</span>
        <IconButton onClick={handleButtonClick} icon={<FaAlignJustify />} />

        <IconButton
          onClick={handleButtonClick}
          size={"5em"}
          buttonstyle={"circle"}
          icon={<FaAlignRight size={"2em"} />}
        />
      </section>

      <section
        style={{
          margin: 0,
          marginTop: "2rem",
        }}
      >
        <h3>{text}</h3>
      </section>

      <section>
        <span>Input elements.</span>

        <InputComponent
          type={"text"}
          onChange={handleChange}
          placeholder="rhino"
        />
        <InputComponent
          type={"password"}
          onChange={handleChange}
          placeholder="naptın"
        />
      </section>
      <section>
        <span>Input elements with icon.</span>
        <IconInput
          icon={<FaShieldAlt />}
          onChange={handleChange}
          placeholder="zırhım"
        />
        <IconInput
          icon={<FaWater />}
          onChange={handleChange}
          placeholder="su"
          position={"right"}
        />
      </section>
      <section>
        <span>Input elements with floating text.</span>
        <LabelInput
          id="selam"
          type={"text"}
          onChange={handleChange}
          text={"alıyor infilak edicem"}
        />
        <LabelInput type={"password"} onChange={handleChange} text={"Şifre"} />
      </section>

      <section>
        <span>Modal.</span>
        <Button onClick={handleOpenModal}>Open Modal</Button>

        <Modal show={openModal} cancel={handleCloseModal}>
          <div className={style["custom-modal"]}>
            <span>Dont close me pls :(</span>
            <Button type={buttonType} onClick={handleModalButton}>
              Okey
            </Button>
          </div>
        </Modal>

        {/* This will not shown by default */}
        <Modal show={false}>
          <span>Hidden modal</span>
        </Modal>
      </section>

      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Table.</span>

          <LabelWithIconButton
            onClick={handleShuffle}
            icon={<ImShuffle></ImShuffle>}
          >
            magic
          </LabelWithIconButton>
        </div>

        <Table
          header={["#", "SELAM", "NABER"]}
          data={tableData}
          options={tableOptions}
        ></Table>
      </section>

      <section>
        <hr />
        <h4>Tooltip</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic
          dolorum cupiditate amet a nemo. Dolor aspernatur nisi doloribus, vel a
          rerum placeat facilis qui maxime excepturi explicabo? Cupiditate, sed.
          <Tooltip description="asfa sdgolşıjsdjı gıks asfa asfa sdgolşıjsdjı gıks asfaasfa sdgolşıjsdjı gıks asfa ">
            <FaQuestionCircle />
          </Tooltip>
        </span>
      </section>

      <Footer />
    </div>
  );
}

export default App;
