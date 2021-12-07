import style from './style.module.scss';
import Button from '../../atoms/Button';
import { createPages } from '../../../useCases/actions/paginationCreate';

const Pagination = ({ objectsLength, currentPage, onChangePage }) => {
  const buttons = [];
  if (objectsLength > 0) createPages(buttons, Math.ceil(objectsLength / 10), currentPage);
  return (
    <div className={style.paginator} data-pagination-component>
      <div className={style.block}>
        <div className={style.blockButtons}>
          {buttons.length &&
            buttons.map((button) => (
              <Button
                data-test-page={button + 1}
                value={button + 1}
                key={button}
                color={button + 1 === +currentPage ? true : false}
                onClick={(event) => onChangePage(+event.target.innerText)}
              />
            ))}
        </div>
        <Button
          data-test-end
          value={'...'}
          onClick={() => onChangePage(false, 'end')}
        />
        <Button
          data-test-toLastPage
          value={Math.ceil(objectsLength / 10)}
          data-personsPage={Math.ceil(objectsLength / 10)}
          onClick={(event) => {
            onChangePage(+event.target.innerText);
          }}
        />
      </div>
      <div className={style.arrows}>
        <Button
          value={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 12L12 20M4 12H20"
                stroke="#F1B926"
                strokeWidth="2"
              />
            </svg>
          }
          onClick={() => onChangePage(false, 'prev')}
          type={'arrows'}
        />
        <Button
          value={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 12M20 12L12 20M20 12H4"
                stroke="#F1B926"
                strokeWidth="2"
              />
            </svg>
          }
          onClick={() => onChangePage(false, 'next')}
          type={'arrows'}
        />
      </div>
    </div>
  );
};

export default Pagination;