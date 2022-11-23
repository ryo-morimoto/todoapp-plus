export class EventEmitter {
  #listeners = new Map();

  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type
   * @param {Function} listener
   */
  addEventListener(type, listener) {
    if (!this.#listeners.has(type)) {
      this.#listeners.set(type, new Set());
    }

    const listenerSet = this.#listeners.get(type);
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチする
   * @param {string} type
   */
  emit(type) {
    const listenerSet = this.#listeners.get(type);
    if (!listenerSet) {
      return;
    }

    listenerSet.forEach((listener) => {
      listener.call(this);
    });
  }

  /**
   * 指定したイベントリスナーを解除する
   * @param {string} type
   * @param {Function} listener
   */
  removeEventListener(type, listener) {
    const listenerSet = this.#listeners.get(type);
    if (!listenerSet) {
      return;
    }

    listenerSet.forEach((ownListener) => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
