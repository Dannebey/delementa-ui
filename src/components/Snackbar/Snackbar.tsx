import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styles from "./Snackbar.module.scss";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { Loader } from "../Loader/Loader";
import { SnackbarCords } from "./Snackbar.types";

export interface SnackbarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Текст, отображаемый в Snackbar.
   * @param message - Текст сообщения.
   */
  message: ReactNode;

  /**
   * Заголовок, отображаемый в Snackbar.
   * @param title - Текст заголовка.
   */
  title?: ReactNode;

  /**
   * Управляет видимостью Snackbar.
   * Если значение true, Snackbar будет отображаться; если false, он будет скрыт.
   * @param open - Видимость Snackbar.
   */
  open: boolean;

  /**
   * Опциональная продолжительность (в миллисекундах) для автоматического закрытия Snackbar.
   * Если не указано, Snackbar останется открытым до тех пор, пока не будет закрыт вручную.
   * @param duration - Продолжительность отображения Snackbar.
   */
  duration?: number;

  /**
   * Опциональная функция обратного вызова, вызываемая при закрытии Snackbar.
   * Это может произойти автоматически по истечении duration или вручную пользователем.
   * @param onClose - Функция, вызываемая при закрытии Snackbar.
   */
  onClose?: () => void;

  /**
   * Опциональный элемент действия (например, кнопка), который может быть отображен вместе с сообщением.
   * Это позволяет пользователю выполнять дополнительные действия, такие как отмена или повторное выполнение действия.
   * @param action - Элемент действия для Snackbar.
   */
  action?: ReactNode;

  /**
   * Определяет тип Snackbar, что может повлиять на его стили.
   * Возможные значения:
   * - "info": Информационное уведомление.
   * - "success": Уведомление об успешном выполнении действия.
   * - "error": Уведомление об ошибке.
   * - "warning": Уведомление о предупреждении.
   * @param type - Тип Snackbar.
   */
  type?: "info" | "success" | "error" | "warning";

  /**
   * Указывает, находится ли Snackbar в состоянии загрузки.
   * @param loading - Состояние загрузки Snackbar.
   */
  loading?: boolean;

  /**
   * Определяет положение Snackbar на экране.
   * Свойство принимает объект с двумя параметрами:
   * - `vertical`: Определяет вертикальное положение Snackbar. Возможные значения:
   *   - "top": Snackbar будет отображаться в верхней части экрана.
   *   - "bottom": Snackbar будет отображаться в нижней части экрана.
   * - `horizontal`: Определяет горизонтальное положение Snackbar. Возможные значения:
   *   - "left": Snackbar будет отображаться с левой стороны экрана.
   *   - "right": Snackbar будет отображаться с правой стороны экрана.
   * @param cords - Положение Snackbar на экране.
   */
  cords?: SnackbarCords;
}
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const {
      message,
      duration,
      open,
      onClose,
      action = null,
      type = "info",
      title,
      loading,
      className,
      cords = { vertical: "bottom", horizontal: "right" },
      ...rest
    } = props;

    const [isVisible, setIsVisible] = useState(open);

    const snackbarClass = clsx(
      styles.snackbar,
      styles[type],
      { [styles["fade-in"]]: open, [styles["fade-out"]]: !open },
      styles[cords.vertical],
      styles[cords.horizontal],
      className,
    );

    useEffect(() => {
      if (open) {
        setIsVisible(true);
      } else {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 300);

        return () => clearTimeout(timeout);
      }
    }, [open]);

    useEffect(() => {
      let timeout: NodeJS.Timeout | undefined;

      if (duration && open) {
        timeout = setTimeout(() => {
          if (onClose) onClose();
        }, duration);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }, [duration, open]);

    return isVisible ? (
      <div className={snackbarClass} ref={ref} role={"alert"} {...rest}>
        <div className={styles.main}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <div className={styles.info}>
            {loading && <Loader color={"#fff"} />}
            <span>{message}</span>
          </div>
        </div>
        <div className={styles.actionBlock}>
          {action}
          {onClose && <IoMdClose className={styles.close} onClick={onClose} />}
        </div>
      </div>
    ) : null;
  },
);
