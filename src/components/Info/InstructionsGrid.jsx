import React from "react";
import styled from "styled-components";

import {
  ContainerActivity,
  ContainerEffect,
  ContainerIntensity,
  InputRadio
} from "../styled/Inputs";
import Title from "../styled/Title";
import { LabelEffect } from "../styled/Labels";
import { LabelIntensity } from "../styled/Labels";
import { InfoButton } from "../styled/Buttons";
import { ListItem } from "../styled/Lists";
import { Result } from "../styled/Result";

const InfoGrid = styled.div`
  color: ${({ theme }) => theme.whitecolor};

  & article {
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p {
    box-sizing: border-box;
    width: 350px;
    font-size: 16px;
    font-weight: 700;
    padding: 0 3rem;
  }

  & article:nth-child(4) {
    margin-bottom: 40px;
  }
`;

const DeleteItem = styled(ListItem)`
  box-sizing: border-box;

  & div {
    color: ${({ theme }) => theme.whitecolor};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.whitecolor};
  }
`;

const InstrutionsGrid = () => {
  return (
    <InfoGrid>
      <article>
        <ContainerActivity>
          <Title>Nombre actividad</Title>
          <input type="text" />
        </ContainerActivity>
        <p>Introduce una actividad que realices a diario o frecuentemente.</p>
      </article>
      <article>
        <ContainerEffect>
          <Title>Efecto</Title>
          <InputRadio type="radio" name="efecto" id="positivo" />
          <LabelEffect htmlFor="positivo" className="positivo">
            positivo
          </LabelEffect>
          <InputRadio type="radio" name="efecto" id="negativo" />
          <LabelEffect htmlFor="negativo" className="negativo">
            negativo
          </LabelEffect>
        </ContainerEffect>
        <p>
          Pulsa según el efecto que esa actividad te produce mientras la
          realizas.
        </p>
      </article>
      <article>
        <ContainerIntensity>
          <Title>Intensidad</Title>
          <div>
            <InputRadio type="radio" name="intensidad" id="1" value={1} />
            <LabelIntensity htmlFor="1">1</LabelIntensity>
            <InputRadio type="radio" name="intensidad" id="2" value={2} />
            <LabelIntensity htmlFor="2">2</LabelIntensity>
            <InputRadio type="radio" name="intensidad" id="3" value={3} />
            <LabelIntensity htmlFor="3">3</LabelIntensity>
            <InputRadio type="radio" name="intensidad" id="4" value={4} />
            <LabelIntensity htmlFor="4">4</LabelIntensity>
            <InputRadio type="radio" name="intensidad" id="5" value={5} />
            <LabelIntensity htmlFor="5">5</LabelIntensity>
          </div>
        </ContainerIntensity>
        <p>
          Selecciona la intensidad del efecto. Desde 1 si es poco, hasta 5 si es
          muy intenso.
        </p>
      </article>
      <article className="button">
        <InfoButton type="submit" value="Añadir" />
        <p>Pulsa añadir para enviarlo a la lista.</p>
      </article>
      <article className="button">
        <DeleteItem>
          <button type="button">-</button>
          <div>
            <p>Actividad</p>
            <span>5</span>
          </div>
        </DeleteItem>
        <p>
          Pon el cursor sobre el elemento de la lista que quieras eliminar y
          pulsa el botón - .
        </p>
      </article>
      <article>
        <Result>
          <span>50%</span>
        </Result>
        <p>
          Cada vez que añadas una nueva actividad en cualquiera de los lados se
          actualizará el porcentaje de alegría según la cantidad y su
          intensidad. Siendo 100% el máximo si no hubiera ninguna negativa.
        </p>
      </article>
    </InfoGrid>
  );
};

export default InstrutionsGrid;
