import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { TooltipComponent } from "components/general/Tooltip";
import { Input } from "components/general/Input";

import * as S from "./Config.styles";
import { Button } from "components/general/Button";
import { toast } from "react-hot-toast";

export function ConfigPage(): React.ReactElement {
  const { register, handleSubmit } = useForm();

  const [inputsAmount, inputsAmountSet] = useState<number[]>([1, 2]);

  const isMax = inputsAmount.length === 6;
  const isMin = inputsAmount.length < 2;

  const inputsComponents = inputsAmount.map((index) => (
    <S.PlayerData>
      <S.Inner>
        <Input register={register} name={`player${index}`}>
          {`Player #${index}`}
        </Input>

        <Button motive="white">Choose your pawn...</Button>
      </S.Inner>
    </S.PlayerData>
  ));

  const addInput = () => {
    if (inputsAmount.length === 6) {
      toast.error("Maximum amount of players is 6.");
      return;
    }

    inputsAmountSet((state) => [...state, state.length + 1]);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Title>Let’s start with creating players</S.Title>

        <S.Inputs>
          {inputsComponents}

          <S.ButtonWrapper>
            <TooltipComponent
              content={isMax ? "Maximum amount of players is 6." : ""}
            >
              <Button
                type="button"
                disabled={isMax}
                scale="lg"
                onClick={() => addInput()}
              >
                Add Player
              </Button>
            </TooltipComponent>
          </S.ButtonWrapper>
        </S.Inputs>

        <TooltipComponent
          content={isMin ? "Minimum amount of players is 2." : ""}
        >
          <Button type="submit" scale="xl2">
            start game
          </Button>
        </TooltipComponent>
      </S.Container>
    </form>
  );
}
